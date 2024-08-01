const DIVAS_DEBUG = 1;

// -----------------------------------------------------------------------------
class Result
{
  // ---------------------------------------------------------------------------
  static Valid(value)
  {
    return new Result(value, null);
  }

  static Invalid(value)
  {
    return new Result(value, true, { message: `invalid: ${value}`});
  }

  // ---------------------------------------------------------------------------
  static async ResponseError(error)
  {
    try {
      const json_obj = await error.json();
      const msg      = json_obj.error || json_obj.message;
      return new Result(null, json_obj, { message: msg });
    } catch(e) {
      if(error.type == "cors") {
        return new Result(null, error, { message: `${error.url} - ${error.statusText});` });
      }

      if(error.status == 999) {
        return new Result(null, error, { message: `safe_fetch error;` });
      }

      debugger;
    }
  }

  // ---------------------------------------------------------------------------
  static LogicError(msg)
  {
    const error = new Error(msg);
    return new Result(null, error, { message: msg });
  }

  // ---------------------------------------------------------------------------
  static ExceptionError(error)
  {
    if(DIVAS_DEBUG) {
      throw error;
    }
    return new Result(null, error, { message: error.message });
  }


  // ---------------------------------------------------------------------------
  constructor(value, error, errorJson)
  {
    this.value     = value;
    this.error     = error;
    this.errorJson = errorJson;
  }


  IsValid() { return this.value  && !this.error; }
  IsError() { return this.error; }
}

// -----------------------------------------------------------------------------
export default Result;

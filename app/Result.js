
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
    const json_obj = await error.json();
    const msg      = json_obj.error || json_obj.message;
    return new Result(null, json_obj, { message: msg });
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
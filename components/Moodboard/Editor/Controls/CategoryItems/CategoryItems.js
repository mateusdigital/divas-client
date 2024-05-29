const App = require("@/models/App");


// -----------------------------------------------------------------------------
function _CreateCategoryItem(index, data, handler) {

}


// -----------------------------------------------------------------------------
function Component()
{
  const category_type = "accessories";

  //
  const [categoryItems, setCategoryItems] = useState(null);
  useEffect(()=>{
    const _GetCategoryItems = async ()=>{
      const items = await App.GetMoodboardItemsWithCategory(category_type);
      setCategoryItems(items);
    }

    if(category_type) {
      _GetCategoryItems();
    }
  }, [category_type]);

  //
  const _OnCategoryItemClicked = ()=>{
  };

  //
  return (<>
    <div className={styles.bottomCategoriesContainer}>
      {categoryItems.map((data, index) => {
        return _CreateCategoryItem(index, data, _OnCategoryItemClicked);
      })}
    </div>
  </>);
}
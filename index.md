<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet"  type="text/css" href="style.css"> 
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css">
   
    <script src="script.js"  defer></script>
    <title>Sprinklr Grocery</title>
  </head>
  <body>
     <header class="Disc">
           <div> Shivam's Grocery</div>   
           <i class="fas fa-shopping-cart"></i>      
     </header> 
     <div class = "container"> 
          <div class="add_edit_part">
          <div class="title first"> Add Grocery Item</div> 
           <form class="form_item add_item">
                <label for="item_name">Item Name</label>
                <input type="text" id="item_name"  placeholder="Add Item Value" required>
                <label for="item_quantity">Quantity</label>
                <input type="number" id="item_quantity" placeholder="Add Item Quantity" min=0 required>
                <button type="submit" id="add_edit_button">Add</button>
            </form>
        </div>
        <div class="grocery_list_part"> 
        <div class="title second"> Grocery List</div>
        <ul class="grocery_list">
        </div>
            
        </ul>
     
      </div>
  </body>
</html>

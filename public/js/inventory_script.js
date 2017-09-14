$(document).ready(function() {
   function createInventoryListing (data) {
       data = JSON.parse(data);
        if(typeof data === 'object') {
            for(var obj in data) {
                $('#inventory_listings .row').append(`
                    <div class='col-md-4 col-sm-4'>${obj}</div>
                `);
            }
        }
        else {
            console.log('not a json object...');
        }
    }  
});
    
    
    
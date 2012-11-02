$(document).ready(function() {
  ready();      
});
  
  
  function ready() {
    
     $("#myModal").hammer({
                 prevent_default: true,
                 drag_vertical: true
             })
             .bind("dragstart", function(ev) {
                 $(this).css('-webkit-transform', 'translate3d(0,' + ev.distanceY + 'px,0)');
             })
             .bind("drag", function(ev) {
                 $(this).css('-webkit-transform', 'translate3d(0,' + ev.distanceY + 'px,0)');
             })
             .bind("dragend", function(ev) {
                 console.log(ev);
                 if (ev.distance >= 30) {
                   $("#myModal").modal('hide');
  
                 }
             });
   
   }

  
  
  
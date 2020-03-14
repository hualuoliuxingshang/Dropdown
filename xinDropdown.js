;(function(){
    'use strict';

    window.xinDropdown = {
        boot,
    };

    function boot(triggerSelector,dropdownSelector) {
        const trigger = triggerSelector;
        const dropdown = dropdownSelector;

        //用js主动添加css样式
        dropdown.classList.add('xin-dropdown');
        
        document.addEventListener('click',e=>{
            if(e.target===trigger){
                dropdown.hidden = !dropdown.hidden;
                return;
            }
            if(!e.target.closest('.dropdown')){
                dropdown.hidden = true;
            }
        })

        // trigger.addEventListener('mouseenter',()=>{
//     dropdown.hidden = false;
// });
// trigger.addEventListener('mouseleave',()=>{
//     dropdown.hidden = true;
// });

// document.addEventListener('keyup',e=>{
//     if(e.key == 'q' && e.ctrlKey)
//     dropdown.hidden = !dropdown.hidden;
// });
    }

    




})();
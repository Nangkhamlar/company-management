       
    
    //for menu toggle
    function openmenu() {
        document.getElementById("sidemenu").style.right = "0";
        document.getElementById("closeIcon-menu").style.display = "block";
    }

    function closemenu() {
        document.getElementById("sidemenu").style.right = "-200px";
        document.getElementById("closeIcon-menu").style.display = "none";
    }

    $('#userTable').DataTable({
    responsive: true,
    ordering: false,
    scrollX: true,
  });

  $('#dt-length-0').select2({
    minimumResultsForSearch: Infinity
  });

   

// form validation
(function () {
    'use strict'

    var forms = document.querySelectorAll('.needs-validation')

    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                event.preventDefault(); 

                if (!form.checkValidity()) {
                    event.stopPropagation()
                    form.classList.add('was-validated')
                } else {
                  
                    window.location.href = 'index.html';
                }
            }, false)
        })
})();

// select2 library
    $('.select2-role').select2({
        minimumResultsForSearch: Infinity,
        placeholder: "Choose your role",
        allowClear: false,
        width: '100%'
    });
    $('.select2-department').select2({
        minimumResultsForSearch: Infinity,
        placeholder: "Choose your department",
        allowClear: false,
        width: '100%'
    });
    

   









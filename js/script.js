
    //for menu toggle
    function openmenu() {
        document.getElementById("sidemenu").style.right = "0";  
    }
    function closemenu() {
        document.getElementById("sidemenu").style.right = "-200px";
    }

$('#userTable').DataTable({
    responsive: true,
    ordering: true,
    scrollX: true,
     columnDefs: [
        {
            targets: 10,   
            orderable: false
        }
    ] 
  });

  $('#roleTable').DataTable({
    responsive: true,
    ordering: true,
    scrollX: true,
     columnDefs: [
        {
            targets: 4,   
            orderable: false
        }
    ] 
  });

  $('#dt-length-0').select2({
    minimumResultsForSearch: Infinity
  });

   $('#dt-length-1').select2({
    minimumResultsForSearch: Infinity
  });


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
                } else{
                    window.location.href = 'index.html';
                 
             

                }
            }, false)
        })
})();



   









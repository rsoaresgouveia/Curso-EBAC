// instancia jquery e evita conflitos
// jQuery( function($){
$(document).ready(function(){
   
   $('.owl-carousel').owlCarousel();
   
   // let titulos = $('h4') // tag
   
   // let itens = $('.featured-item') // class
   
   // let destaques = $('#featured') // id
   
   // console.log(titulos.first());
   
   // Configuração de produtos
   
   // $('.featured-item a').addClass('btn btn-dark stretch-link');
   
   // $('.featured-item:first h4').append('<span class="badge bg-secondary">Novo</span>')
   // $('.featured-item:first h4').start('<span class="badge bg-secondary">Novo</span>')
   // $('.featured-item:first h4').html('<span class="badge bg-secondary">Novo</span>')
   // $('.featured-item:first h4').addClass('active')
   // $('.featured-item:first h4').removeClass('active')
   // $('.featured-item:first h4').toggleClass('active')
   // $('.featured-item:first h4').hide()
   // $('.featured-item:first h4').show()
   // $('.featured-item:first h4').fadeIn(2000)
   // $('.featured-item:first h4').fadeOut()
   //  $('.featured-item:first h4').css('color', '#f00')

   
   // $('.featured-item h4').dblclick( function(){
      
   //    $(this).css({
   //       'color': '#f00',
   //       'background': '#ff0',
   //       'font-weight': '100',
   //    });
      
   // });
   
   /*
    * Manipulação de eventos
    */
   // $('.featured-item a').on('blur', function(event){
      
   //    event.preventDefault();
      
   //    alert('Produto esgotado');
      
   // })

   /* 
    * Callback
    * entendendo ações que começam ao termino de outra
    */
   // $('.featured-item:nth(1)')
   //    .hide(500, function(){
   //       // este é o callback
   //       console.log( $(this).find('h4').text() + ' esgotado')
   //    })
   //    .show(500, function(){
   //       console.log( $(this).find('h4').text() + ' em estoque')
   //    })
 

   /*
    * Animações
    */
   // const duracao = 1000 // equivalenta a 1 segundo

   // $('.featured-item:nth(0)')
   //    .hide(duracao)
   //    .show(duracao)
   //    .fadeOut(duracao)
   //    .fadeIn(duracao)
   //    .toggle(duracao)
   //    .toggle(duracao)

   $('#form-submit').on('click', function(e){

      e.preventDefault()

      var VAL = $('#email').val();

      console.log(emailValidation(VAL))
      if (emailValidation(VAL)) {
         $('#email').animate({
            opacity: "toggle",
            top: "-50"
         }, 500, function(){
            console.log($(this).val())
         })

      }
      else{
         $('#email').css({'color': '#f00', 'border-color':'red'})
         $('#email').effect('shake', {"times": 5}, 1000)
      }

   });

   function emailValidation($email) {
      var regex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      return regex.test( $email );
   }

   function cpfValidation($cpf){
      var regex = /[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}?$/;
      return regex.test( $cpf );
   }

   /*
    * Ouvinte de eventos .nav-modal-open
    */
   $('.nav-modal-open').on('click', function(e){

      e.preventDefault();

      let elem = $(this).attr('rel')

      $('.modal-body').html($('#'+elem).html())
      
      $('.modal-header h5.modal-title').html($(this).text())

      let myModal = new bootstrap.Modal($('#modelId'))

      myModal.show()
   });

   /*
    * TODO: incrementar a validação
    * - checar se o nome é válido (mais de 2 caracteres)
    * - checar se o email é válido com ao menos um "@" e "."
    * - checar se o cpf é válido com regex
    */

   function validate( elem ){

      var valor = elem.val()

      if(elem[0].id == 'nome'){
         if(valor == ''){
            return returnFalse(elem); 
         }
         if(valor.length <=2 ){
            return returnFalse(elem); 
         }
      }

      if(elem[0].id == 'email'){
         if(valor == ''){
            return returnFalse(elem); 
         }
         if(valor.length <=2 ){
            return returnFalse(elem); 
         }
         if(!emailValidation(valor)){
            return returnFalse(elem); 
         }
      }

      if(elem[0].id == 'cpf'){
         if(valor == ''){
            return returnFalse(elem); 
         }
         if(valor.length <11 ){
            return returnFalse(elem); 
         }
         if(!cpfValidation(valor)){
            return returnFalse(elem); 
         }
      }



      elem.parent().find('.text-muted').hide()
      elem.removeClass('invalid')

   }

   function returnFalse(elem){
      console.log('o campo de '+ elem.attr('name') + ' é obrigatório')
      elem.parent().find('.text-muted').show()
      elem.addClass('invalid')
      return false; 
   }
   
   $('body').on('submit', '.modal-body .form', function(e){
      
      e.preventDefault()

      const inputName = $('#nome')
      const inputEmail = $('#email')
      const inputCPF = $('#cpf')
      
      if(inputEmail.hasClass('invalid') || inputName.hasClass('invalid') || inputCPF.hasClass('invalid')){
         console.log('verificar campos obrigatórios')
         return false
      } else {
         $(this)[0].submit(function (event){
            return this.true
         })  
      }
   })
   
   
   
   $('body').on('blur', '#nome', function(){
      validate($(this))
   })
   
   $('body').on('blur', '#email', function(){
      validate($(this))
   })
   
   
   $('body').on('focus', '#date', function(){
      $(this).datepicker()
   })
   
   $('body').on('blur', '#date', function(){
      validate($(this))
      $(this).mask('00/00/0000');
   }) 
   
   $('body').on('blur', '#time', function(){
      validate($(this))
      $(this).mask('00:00');
   })
   
   $('body').on('blur', '#cep', function(){
      validate($(this))
      $(this).mask('00000-000');
   })
   
   $('body').on('blur', '#phone', function(){
      validate($(this))
      $(this).mask('00000-0000');
   })
   
   $('body').on('blur', '#cpf', function(){
      validate($(this))
      $(this).mask('000.000.000-00');
   })
   
})
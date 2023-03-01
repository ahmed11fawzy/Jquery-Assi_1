let btnText=$('#openBtn span');
//=========================================
// aside Bar 
$('#openBtn').click(function(){
   let asideWidth=$('.asideBarContainer').width();
   
   /* console.log(asideWidth); */
   if(asideWidth<=150 )
   {
      $('#openBtn i').removeClass('fa-bars')
      $('#openBtn i').addClass('fa-xmark')
      $('#openBtn span').text('close');
      
      $('.asideBarContainer').css('width','25%');
      $('.homeText').css('width','75%');
      openBar();
      $('#asideBar a').css({
         color:' rgba(255, 255, 225, 1)',
      })
      /* $('#asideBar').removeClass('d-none')
      $('#asideBar').addClass('d-block')
       */
   }
   else {
      $('#openBtn i').removeClass('fa-xmark')
      $('#openBtn i').addClass('fa-bars')
      $('#openBtn span').text('open');

      $('.asideBarContainer').css('width','10%');
      $('.homeText').css('width','90%');
      closeBar();
      
         /* $('#asideBar').removeClass('d-block')
         $('#asideBar').addClass('d-none')
          */
      
   }
   
  
})

function openBar(){
   $('#asideBar').css({
      width:'75%',
      
   })
}
function closeBar(){
   $('#asideBar').css({
      width:'0%',
      
   }) 
}

// ========================================

$('#Details h2').click(function(){
   $(this).next().slideToggle(500);
   $("#Details p").not($(this).next()).slideUp(500);
})

/* ================================================= */

let theEndDate=new Date('May 23,2023 6:00:00').getTime()
let timeOut=setInterval(function(){
   let todayDate=new Date().getTime()
   ,remainingDate=theEndDate-todayDate
   ,remainingDays=Math.floor(remainingDate / (1000 * 60 * 60 * 24))
   ,remainingHours= Math.floor((remainingDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
   ,remainingMinutes = Math.floor((remainingDate % (1000 * 60 * 60)) / (1000 * 60))
   ,remainingSeconds= Math.floor((remainingDate % (1000 * 60 )) / (1000  ));

   $('#Days').html(`<p> ${remainingDays}  d</p>`);
   $('#Hours').html(`<p> ${remainingHours} h</p>`);
   $('#Minutes').html(`<p> ${remainingMinutes} m</p>`);
   $('#Seconds').html(`<p> ${remainingSeconds} s</p>`);
   if (remainingDate < 0) {
      clearInterval(timeOut);
      $('#Duration>div>*').css({display:'none'});
      $('#Duration>div').html(`<p>Expired</p>`);
    }
},1000)

/* ========================================================== */

let textArea=$('textarea').val()
   ,maxNumOfChar=100
   ,remainingNumChar=100; 

   function charCounting(){
      
         remainingNumChar=maxNumOfChar - textArea.length;
         $('#charCounter').text(`${remainingNumChar}`);
         console.log(textArea)
      
   }
   
$('textarea').keypress(function(){
   charCounting()
})

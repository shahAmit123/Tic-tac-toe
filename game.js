$(document).ready(function (){
  var player, activePlayer;
  var count = 0;

  player = ['X','O'];
  activePlayer = 0;

  function changePlayer() {
      activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  }

  $('#b0').click(function (){
    $(this).text(player[activePlayer]);
    $(this).attr("disabled", "true");
    changePlayer();
    count++;
    winCheck();
  })

  $('#b1').click(function (){
    $(this).text(player[activePlayer]);
    $(this).attr("disabled", "true");
    changePlayer();
    count++;
    winCheck();
  })

  $('#b2').click(function (){
    $(this).text(player[activePlayer]);
    $(this).attr("disabled", "true");
    changePlayer();
    count++;
    winCheck();
  })

  $('#b3').click(function (){
    $(this).text(player[activePlayer]);
    $(this).attr("disabled", "true");
    changePlayer();
    count++;
    winCheck();
  })

  $('#b4').click(function (){
    $(this).text(player[activePlayer]);
    $(this).attr("disabled", "true");
    changePlayer();
    count++;
    winCheck();
  })

  $('#b5').click(function (){
    $(this).text(player[activePlayer]);
    $(this).attr("disabled", "true");
    changePlayer();
    count++;
    winCheck();
  })

  $('#b6').click(function (){
    $(this).text(player[activePlayer]);
    $(this).attr("disabled", "true");
    changePlayer();
    count++;
    winCheck();
  })

  $('#b7').click(function (){
    $(this).text(player[activePlayer]);
    $(this).attr("disabled", "true");
    changePlayer();
    count++;
    winCheck();
  })

  $('#b8').click(function (){
    $(this).text(player[activePlayer]);
    $(this).attr("disabled", "true");
    changePlayer();
    count++;
    winCheck();
  })

  $('#newGame').click(function(){
      count = 0;
      activePlayer = 0;
      $(".tile").text("");
      $(".tile").removeAttr('disabled');
      $('#winner').text("");
  })

  function winCheck() {
    if($('#b0').text() === $('#b1').text() && $('#b0').text() ===$('#b2').text() && $('#b0').text() === 'X'
       ||$('#b3').text() === $('#b4').text() && $('#b3').text() ===$('#b5').text() && $('#b3').text() === 'X'
       ||$('#b6').text() === $('#b7').text() && $('#b6').text() ===$('#b8').text() && $('#b6').text() === 'X'
       ||$('#b0').text() === $('#b3').text() && $('#b0').text() ===$('#b6').text() && $('#b0').text() === 'X'
       ||$('#b1').text() === $('#b4').text() && $('#b1').text() ===$('#b7').text() && $('#b1').text() === 'X'
       ||$('#b2').text() === $('#b5').text() && $('#b2').text() ===$('#b8').text() && $('#b2').text() === 'X'
       ||$('#b0').text() === $('#b4').text() && $('#b0').text() ===$('#b8').text() && $('#b0').text() === 'X'
       ||$('#b2').text() === $('#b4').text() && $('#b2').text() ===$('#b6').text() && $('#b2').text() === 'X')
      {
        $('#winner').text("Player 1 wins!");
      }
      else if($('#b0').text() === $('#b1').text() && $('#b0').text() ===$('#b2').text() && $('#b0').text() === 'O'
        ||$('#b3').text() === $('#b4').text() && $('#b3').text() ===$('#b5').text() && $('#b3').text() === 'O'
        ||$('#b6').text() === $('#b7').text() && $('#b6').text() ===$('#b8').text() && $('#b6').text() === 'O'
        ||$('#b0').text() === $('#b3').text() && $('#b0').text() ===$('#b6').text() && $('#b0').text() === 'O'
        ||$('#b1').text() === $('#b4').text() && $('#b1').text() ===$('#b7').text() && $('#b1').text() === 'O'
        ||$('#b2').text() === $('#b5').text() && $('#b2').text() ===$('#b8').text() && $('#b2').text() === 'O'
        ||$('#b2').text() === $('#b4').text() && $('#b2').text() ===$('#b6').text() && $('#b2').text() === 'O'
        ||$('#b0').text() === $('#b4').text() && $('#b0').text() ===$('#b8').text() && $('#b0').text() === 'O')
      {
        $('#winner').text("Player 2 wins!");
      }
      else if(count === 9)
      {
        $('#winner').text("It's a draw!");
      }
  }
});

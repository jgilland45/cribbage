var random;//changing random number (assigned to numbered random values below)
var random1 = -1;//first random number placeholder
var random2 = -2;//second random number placeholder
var random3 = -3;//third random number placeholder
var random4 = -4;//fourth random number placeholder
var random5 = -5;//fifth random number placeholder
var random6 = -6;//sixth random number placeholder
var random7 = -7;//seventh random number placeholder
var random8 = -8;//eighth random number placeholder
var random9 = -9;//ninth random number placeholder
var random10 = -10;//tenth random number placeholder
var random11 = -11;//eleventh random number placeholder
var random12 = -12;//twelveth random number placeholder
var cutValue = -13;//the value of the cut card
var crib1 = 0;//the first card in the crib
var crib2 = 0;//the second card in the crib
var crib3 = 0;//the third card in the crib
var crib4 = 0;//the fourth card in the crib
var p1nc1 = -14;//player one new card 1
var p1nc2 = -15;//player one new card 2
var p1nc3 = -16;//player one new card 3
var p1nc4 = -17;//player one new card 4
var p2nc1 = -18;//player two new card 1
var p2nc2 = -19;//player two new card 2
var p2nc3 = -20;//player two new card 3
var p2nc4 = -21;//player two new card 4
var click1 = 0;//numbering of cards for player one
var click2 = 0;//numbering of cards for player two
var showCrib = true;//whether the crib can be shown or not
var finalMove = 0;//the final value that should be moved be a peg
var saveNib = 'no';//the value of a 'saved nib' suit value (for nibs)
clickCardsIntoCrib();//start clicking the cards into the crib
chooseCards();//chooses random cards for the hands
showCribButton();//show the 'show cards in the crib' button
document.getElementById('autoOpen').click();//these are the tabs that show/hide player one/two's cards
function openTab(evt, cityName) {//this was taken from W3Schools's tutorial on tabs
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
function chooseCards() {//this randomly chooses cards to put in the players' hands
    for (var x = 0; x < 12; x++) {//twelve cards in both hands combined
        random = Math.ceil(Math.random() * 52);//52 cards in a standard deck of cards
        //make twelve random cards
        if (x == 0) {
            random1 = random;
        }
        else if (x == 1) {
            random2 = random;
        }
        else if (x == 2) {
            random3 = random;
        }
        else if (x == 3) {
            random4 = random;
        }
        else if (x == 4) {
            random5 = random;
        }
        else if (x == 5) {
            random6 = random;
        }
        else if (x == 6) {
            random7 = random;
        }
        else if (x == 7) {
            random8 = random;
        }
        else if (x == 8) {
            random9 = random;
        }
        else if (x == 9) {
            random10 = random;
        }
        else if (x == 10) {
            random11 = random;
        }
        else if (x == 11) {
            random12 = random;
        }
        //if there are any repeats, this gets rid of them
        while (random1 == random2 || random1 == random3 || random1 == random4 || random1 == random5 || random1 == random6) {
            random1 = Math.ceil(Math.random() * 52);//changes card 1 to something else until it is not a duplicate
        }
        while (random2 == random3 || random2 == random4 || random2 == random5 || random2 == random6) {
            random2 = Math.ceil(Math.random() * 52);//changes card 2 to something else until it is not a duplicate
        }
        while (random3 == random4 || random3 == random5 || random3 == random6) {
            random3 = Math.ceil(Math.random() * 52);//changes card 3 to something else until it is not a duplicate
        }
        while (random4 == random5 || random4 == random6) {
            random4 = Math.ceil(Math.random() * 52);//changes card 4 to something else until it is not a duplicate
        }
        while (random5 == random6) {
            random5 = Math.ceil(Math.random() * 52);//changes card 5 to something else until it is not a duplicate
        }
        while (random7 == random5 || random7 == random4 || random7 == random3 || random7 == random2 || random7 == random1 || random7 == random6 || random7 == random8 || random7 == random9 || random7 == random10 || random7 == random11 || random7 == random12) {
            random7 = Math.ceil(Math.random() * 52);//changes card 7 to something else until it is not a duplicate
        }
        while (random8 == random5 || random8 == random4 || random8 == random3 || random8 == random2 || random8 == random1 || random8 == random6 || random8 == random9 || random8 == random10 || random8 == random11 || random8 == random12) {
            random8 = Math.ceil(Math.random() * 52);//changes card 8 to something else until it is not a duplicate
        }
        while (random9 == random5 || random9 == random4 || random9 == random3 || random9 == random2 || random9 == random1 || random9 == random6 || random9 == random10 || random9 == random11 || random9 == random12) {
            random9 = Math.ceil(Math.random() * 52);//changes card 9 to something else until it is not a duplicate
        }
        while (random10 == random5 || random10 == random4 || random10 == random3 || random10 == random2 || random10 == random1 || random10 == random6 || random10 == random11 || random10 == random12) {
            random10 = Math.ceil(Math.random() * 52);//changes card 10 to something else until it is not a duplicate
        }
        while (random11 == random5 || random11 == random4 || random11 == random3 || random11 == random2 || random11 == random1 || random11 == random6 || random11 == random12) {
            random11 = Math.ceil(Math.random() * 52);//changes card 11 to something else until it is not a duplicate
        }
        while (random12 == random5 || random12 == random4 || random12 == random3 || random12 == random2 || random12 == random1 || random12 == random6) {
            random12 = Math.ceil(Math.random() * 52);//changes card 12 to something else until it is not a duplicate
        }
        
    }
    document.getElementById('showCards1').addEventListener('click', function (show) {//shows player one's cards on screen
        document.getElementById('p1c1').src = 'images/number/' + random1 + '.png';
        document.getElementById('p1c2').src = 'images/number/' + random2 + '.png';
        document.getElementById('p1c3').src = 'images/number/' + random3 + '.png';
        document.getElementById('p1c4').src = 'images/number/' + random4 + '.png';
        document.getElementById('p1c5').src = 'images/number/' + random5 + '.png';
        document.getElementById('p1c6').src = 'images/number/' + random6 + '.png';
        document.getElementById('showCards1').style.display = 'none';
    })
    document.getElementById('showCards2').addEventListener('click', function (show) {//shows player two's cards on screen
        document.getElementById('p2c1').src = 'images/number/' + random7 + '.png';
        document.getElementById('p2c2').src = 'images/number/' + random8 + '.png';
        document.getElementById('p2c3').src = 'images/number/' + random9 + '.png';
        document.getElementById('p2c4').src = 'images/number/' + random10 + '.png';
        document.getElementById('p2c5').src = 'images/number/' + random11 + '.png';
        document.getElementById('p2c6').src = 'images/number/' + random12 + '.png';
        document.getElementById('showCards2').style.display = 'none';
    })
}
function clickCardsIntoCrib() {//when a card is clicked, it is put into the crib
    if (showCrib == true) {
        document.getElementById('p1c1').addEventListener('click', function (putInCrib) {//first card in player one's hand
            click1++;
            if (click1 <= 2) {//if this is the first or second click (only two cards are put into the crib per player), then put the card into the crib
                if (crib1 == 0) {//if this is the first clicked card, put it in the first crib slot
                    crib1 = random1;
                    document.getElementById('p1c1').id = 'crib1';
                    document.getElementById('crib1').style.display = 'none';
                }
                else if (crib2 == 0) {//if this is the second clicked card, put it in the second crib slot
                    crib2 = random1;
                    document.getElementById('p1c1').id = 'crib2';
                    document.getElementById('crib2').style.display = 'none';
                }
                else if (crib3 == 0) {//if this is the third clicked card, put it in the third crib slot
                    crib3 = random1;
                    document.getElementById('p1c1').id = 'crib3';
                    document.getElementById('crib3').style.display = 'none';
                }
                else if (crib4 == 0) {//if this is the fourth clicked card, put it in the fourth crib slot
                    crib4 = random1;
                    document.getElementById('p1c1').id = 'crib4';
                    document.getElementById('crib4').style.display = 'none';
                }
            }
            showCribButton();
        })
        document.getElementById('p1c2').addEventListener('click', function (putInCrib) {//second card in player one's hand
            click1++;
            if (click1 <= 2) {//if this is the first or second click (only two cards are put into the crib per player), then put the card into the crib
                if (crib1 == 0) {//if this is the first clicked card, put it in the first crib slot
                    crib1 = random2;
                    document.getElementById('p1c2').id = 'crib1';
                    document.getElementById('crib1').style.display = 'none';
                }
                else if (crib2 == 0) {//if this is the second clicked card, put it in the second crib slot
                    crib2 = random2;
                    document.getElementById('p1c2').id = 'crib2';
                    document.getElementById('crib2').style.display = 'none';
                }
                else if (crib3 == 0) {//if this is the third clicked card, put it in the third crib slot
                    crib3 = random2;
                    document.getElementById('p1c2').id = 'crib3';
                    document.getElementById('crib3').style.display = 'none';
                }
                else if (crib4 == 0) {//if this is the fourth clicked card, put it in the fourth crib slot
                    crib4 = random2;
                    document.getElementById('p1c2').id = 'crib4';
                    document.getElementById('crib4').style.display = 'none';
                }
            }
            showCribButton();
        })
        document.getElementById('p1c3').addEventListener('click', function (putInCrib) {//third card in player one's hand
            click1++;
            if (click1 <= 2) {//if this is the first or second click (only two cards are put into the crib per player), then put the card into the crib
                if (crib1 == 0) {//if this is the first clicked card, put it in the first crib slot
                    crib1 = random3;
                    document.getElementById('p1c3').id = 'crib1';
                    document.getElementById('crib1').style.display = 'none';
                }
                else if (crib2 == 0) {//if this is the second clicked card, put it in the second crib slot
                    crib2 = random3;
                    document.getElementById('p1c3').id = 'crib2';
                    document.getElementById('crib2').style.display = 'none';
                }
                else if (crib3 == 0) {//if this is the third clicked card, put it in the third crib slot
                    crib3 = random3;
                    document.getElementById('p1c3').id = 'crib3';
                    document.getElementById('crib3').style.display = 'none';
                }
                else if (crib4 == 0) {//if this is the fourth clicked card, put it in the fourth crib slot
                    crib4 = random3;
                    document.getElementById('p1c3').id = 'crib4';
                    document.getElementById('crib4').style.display = 'none';
                }
            }
            showCribButton();
        })
        document.getElementById('p1c4').addEventListener('click', function (putInCrib) {//fourth card in player one's hand
            click1++;
            if (click1 <= 2) {//if this is the first or second click (only two cards are put into the crib per player), then put the card into the crib
                if (crib1 == 0) {//if this is the first clicked card, put it in the first crib slot
                    crib1 = random4;
                    document.getElementById('p1c4').id = 'crib1';
                    document.getElementById('crib1').style.display = 'none';
                }
                else if (crib2 == 0) {//if this is the second clicked card, put it in the second crib slot
                    crib2 = random4;
                    document.getElementById('p1c4').id = 'crib2';
                    document.getElementById('crib2').style.display = 'none';
                }
                else if (crib3 == 0) {//if this is the third clicked card, put it in the third crib slot
                    crib3 = random4;
                    document.getElementById('p1c4').id = 'crib3';
                    document.getElementById('crib3').style.display = 'none';
                }
                else if (crib4 == 0) {//if this is the fourth clicked card, put it in the fourth crib slot
                    crib4 = random4;
                    document.getElementById('p1c4').id = 'crib4';
                    document.getElementById('crib4').style.display = 'none';
                }
            }
            showCribButton();
        })
        document.getElementById('p1c5').addEventListener('click', function (putInCrib) {
            click1++;
            if (click1 <= 2) {//if this is the first or second click (only two cards are put into the crib per player), then put the card into the crib
                if (crib1 == 0) {//if this is the first clicked card, put it in the first crib slot
                    crib1 = random5;
                    document.getElementById('p1c5').id = 'crib1';
                    document.getElementById('crib1').style.display = 'none';
                }
                else if (crib2 == 0) {//if this is the second clicked card, put it in the second crib slot
                    crib2 = random5;
                    document.getElementById('p1c5').id = 'crib2';
                    document.getElementById('crib2').style.display = 'none';
                }
                else if (crib3 == 0) {//if this is the third clicked card, put it in the third crib slot
                    crib3 = random5;
                    document.getElementById('p1c5').id = 'crib3';
                    document.getElementById('crib3').style.display = 'none';
                }
                else if (crib4 == 0) {//if this is the fourth clicked card, put it in the fourth crib slot
                    crib4 = random5;
                    document.getElementById('p1c5').id = 'crib4';
                    document.getElementById('crib4').style.display = 'none';
                }
            }
            showCribButton();
        })
        document.getElementById('p1c6').addEventListener('click', function (putInCrib) {
            click1++;
            if (click1 <= 2) {//if this is the first or second click (only two cards are put into the crib per player), then put the card into the crib
                if (crib1 == 0) {//if this is the first clicked card, put it in the first crib slot
                    crib1 = random6;
                    document.getElementById('p1c3').id = 'crib1';
                    document.getElementById('crib1').style.display = 'none';
                }
                else if (crib2 == 0) {//if this is the second clicked card, put it in the second crib slot
                    crib2 = random6;
                    document.getElementById('p1c6').id = 'crib2';
                    document.getElementById('crib2').style.display = 'none';
                }
                else if (crib3 == 0) {//if this is the third clicked card, put it in the third crib slot
                    crib3 = random6;
                    document.getElementById('p1c6').id = 'crib3';
                    document.getElementById('crib3').style.display = 'none';
                }
                else if (crib4 == 0) {//if this is the fourth clicked card, put it in the fourth crib slot
                    crib4 = random6;
                    document.getElementById('p1c6').id = 'crib4';
                    document.getElementById('crib4').style.display = 'none';
                }
            }
            showCribButton();
        })
        document.getElementById('p2c1').addEventListener('click', function (putInCrib) {
            click2++;
            if (click2 <= 2) {//if this is the first or second click (only two cards are put into the crib per player), then put the card into the crib
                if (crib1 == 0) {//if this is the first clicked card, put it in the first crib slot
                    crib1 = random7;
                    document.getElementById('p2c1').id = 'crib1';
                    document.getElementById('crib1').style.display = 'none';
                }
                else if (crib2 == 0) {//if this is the second clicked card, put it in the second crib slot
                    crib2 = random7;
                    document.getElementById('p2c1').id = 'crib2';
                    document.getElementById('crib2').style.display = 'none';
                }
                else if (crib3 == 0) {//if this is the third clicked card, put it in the third crib slot
                    crib3 = random7;
                    document.getElementById('p2c1').id = 'crib3';
                    document.getElementById('crib3').style.display = 'none';
                }
                else if (crib4 == 0) {//if this is the fourth clicked card, put it in the fourth crib slot
                    crib4 = random7;
                    document.getElementById('p2c1').id = 'crib4';
                    document.getElementById('crib4').style.display = 'none';
                }
            }
            showCribButton();
        })
        document.getElementById('p2c2').addEventListener('click', function (putInCrib) {
            click2++;
            if (click2 <= 2) {//if this is the first or second click (only two cards are put into the crib per player), then put the card into the crib
                if (crib1 == 0) {//if this is the first clicked card, put it in the first crib slot
                    crib1 = random8;
                    document.getElementById('p2c2').id = 'crib1';
                    document.getElementById('crib1').style.display = 'none';
                }
                else if (crib2 == 0) {//if this is the second clicked card, put it in the second crib slot
                    crib2 = random8;
                    document.getElementById('p2c2').id = 'crib2';
                    document.getElementById('crib2').style.display = 'none';
                }
                else if (crib3 == 0) {//if this is the third clicked card, put it in the third crib slot
                    crib3 = random8;
                    document.getElementById('p2c2').id = 'crib3';
                    document.getElementById('crib3').style.display = 'none';
                }
                else if (crib4 == 0) {//if this is the fourth clicked card, put it in the fourth crib slot
                    crib4 = random8;
                    document.getElementById('p2c2').id = 'crib4';
                    document.getElementById('crib4').style.display = 'none';
                }
            }
            showCribButton();
        })
        document.getElementById('p2c3').addEventListener('click', function (putInCrib) {
            click2++;
            if (click2 <= 2) {//if this is the first or second click (only two cards are put into the crib per player), then put the card into the crib
                if (crib1 == 0) {//if this is the first clicked card, put it in the first crib slot
                    crib1 = random9;
                    document.getElementById('p2c3').id = 'crib1';
                    document.getElementById('crib1').style.display = 'none';
                }
                else if (crib2 == 0) {//if this is the second clicked card, put it in the second crib slot
                    crib2 = random9;
                    document.getElementById('p2c3').id = 'crib2';
                    document.getElementById('crib2').style.display = 'none';
                }
                else if (crib3 == 0) {//if this is the third clicked card, put it in the third crib slot
                    crib3 = random9;
                    document.getElementById('p2c3').id = 'crib3';
                    document.getElementById('crib3').style.display = 'none';
                }
                else if (crib4 == 0) {//if this is the fourth clicked card, put it in the fourth crib slot
                    crib4 = random9;
                    document.getElementById('p2c3').id = 'crib4';
                    document.getElementById('crib4').style.display = 'none';
                }
            }
            showCribButton();
        })
        document.getElementById('p2c4').addEventListener('click', function (putInCrib) {
            click2++;
            if (click2 <= 2) {//if this is the first or second click (only two cards are put into the crib per player), then put the card into the crib
                if (crib1 == 0) {//if this is the first clicked card, put it in the first crib slot
                    crib1 = random10;
                    document.getElementById('p2c4').id = 'crib1';
                    document.getElementById('crib1').style.display = 'none';
                }
                else if (crib2 == 0) {//if this is the second clicked card, put it in the second crib slot
                    crib2 = random10;
                    document.getElementById('p2c4').id = 'crib2';
                    document.getElementById('crib2').style.display = 'none';
                }
                else if (crib3 == 0) {//if this is the third clicked card, put it in the third crib slot
                    crib3 = random10;
                    document.getElementById('p2c4').id = 'crib3';
                    document.getElementById('crib3').style.display = 'none';
                }
                else if (crib4 == 0) {//if this is the fourth clicked card, put it in the fourth crib slot
                    crib4 = random10;
                    document.getElementById('p2c4').id = 'crib4';
                    document.getElementById('crib4').style.display = 'none';
                }
            }
            showCribButton();
        })
        document.getElementById('p2c5').addEventListener('click', function (putInCrib) {
            click2++;
            if (click2 <= 2) {//if this is the first or second click (only two cards are put into the crib per player), then put the card into the crib
                if (crib1 == 0) {//if this is the first clicked card, put it in the first crib slot
                    crib1 = random11;
                    document.getElementById('p2c5').id = 'crib1';
                    document.getElementById('crib1').style.display = 'none';
                }
                else if (crib2 == 0) {//if this is the second clicked card, put it in the second crib slot
                    crib2 = random11;
                    document.getElementById('p2c5').id = 'crib2';
                    document.getElementById('crib2').style.display = 'none';
                }
                else if (crib3 == 0) {//if this is the third clicked card, put it in the third crib slot
                    crib3 = random11;
                    document.getElementById('p2c5').id = 'crib3';
                    document.getElementById('crib3').style.display = 'none';
                }
                else if (crib4 == 0) {//if this is the fourth clicked card, put it in the fourth crib slot
                    crib4 = random11;
                    document.getElementById('p2c5').id = 'crib4';
                    document.getElementById('crib4').style.display = 'none';
                }
            }
            showCribButton();
        })
        document.getElementById('p2c6').addEventListener('click', function (putInCrib) {
            click2++;
            if (click2 <= 2) {//if this is the first or second click (only two cards are put into the crib per player), then put the card into the crib
                if (crib1 == 0) {//if this is the first clicked card, put it in the first crib slot
                    crib1 = random12;
                    document.getElementById('p2c6').id = 'crib1';
                    document.getElementById('crib1').style.display = 'none';
                }
                else if (crib2 == 0) {//if this is the second clicked card, put it in the second crib slot
                    crib2 = random12;
                    document.getElementById('p2c6').id = 'crib2';
                    document.getElementById('crib2').style.display = 'none';
                }
                else if (crib3 == 0) {//if this is the third clicked card, put it in the third crib slot
                    crib3 = random12;
                    document.getElementById('p2c6').id = 'crib3';
                    document.getElementById('crib3').style.display = 'none';
                }
                else if (crib4 == 0) {//if this is the fourth clicked card, put it in the fourth crib slot
                    crib4 = random12;
                    document.getElementById('p2c6').id = 'crib4';
                    document.getElementById('crib4').style.display = 'none';
                }
            }
            showCribButton();
        })
    }
}
document.getElementById('showCrib').addEventListener('click', function (show) {//this is the event listener for the button to show the crib
    //this shows the cards in the crib
    document.getElementById('p3c1').src = 'images/number/' + crib1 + '.png';
    document.getElementById('p3c2').src = 'images/number/' + crib2 + '.png';
    document.getElementById('p3c3').src = 'images/number/' + crib3 + '.png';
    document.getElementById('p3c4').src = 'images/number/' + crib4 + '.png';
    document.getElementById('showCrib').style.display = 'none';
})
function showCribButton() {//this shows insctructions to the players for how many cards they still need to click into the crib
    if (click1 == 0) {
        document.getElementById('p1Instructions').innerHTML = 'Choose two more cards to put in the crib';
    }
    else if (click1 == 1) {
        document.getElementById('p1Instructions').innerHTML = 'Choose one more card to put in the crib';
    }
    else if (click1 == 2) {
        document.getElementById('p1Instructions').innerHTML = '';
    }
    if (click2 == 0) {
        document.getElementById('p2Instructions').innerHTML = 'Choose two more cards to put in the crib';
    }
    else if (click2 == 1) {
        document.getElementById('p2Instructions').innerHTML = 'Choose one more card to put in the crib';
    }
    else if (click2 == 2) {
        document.getElementById('p2Instructions').innerHTML = '';
    }
    if (click1 >= 2 && click2 >= 2 && showCrib == true) {//if both players have clicked two cards into the crib already
        document.getElementById('showCrib').style.display = 'block';
        cutDeck();//be able to cut the deck now and get the cut card
        showCrib = false;
        if (p1nc1 == -14) {
            if (crib1 != random1 && crib2 != random1 && crib3 != random1 && crib4 != random1) {//if this card is not in the crib
                p1nc1 = random1;//then it is player one new card one
                console.log('player 1 card 1 = ' + p1nc1);
                document.getElementById('p1c1').id = 'p1nc1';
            }
            if ((crib1 != random2 && crib2 != random2 && crib3 != random2 && crib4 != random2) && p1nc1 != random1) {//if this card is not in the crib or in the hand
                p1nc1 = random2;//then it is player one new card one
                console.log('player 1 card 1 = ' + p1nc1);
                document.getElementById('p1c2').id = 'p1nc1';
            }
            if (crib1 != random3 && crib2 != random3 && crib3 != random3 && crib4 != random3 && p1nc1 != random1 && p1nc1 != random2) {//if this card is not in the crib or in the hand
                p1nc1 = random3;//then it is player one new card one
                console.log('player 1 card 1 = ' + p1nc1);
                document.getElementById('p1c3').id = 'p1nc1';
            }
            if (crib1 != random4 && crib2 != random4 && crib3 != random4 && crib4 != random4 && p1nc1 != random1 && p1nc1 != random2 && p1nc1 != random3) {//if this card is not in the crib or in the hand
                p1nc1 = random4;//then it is player one new card one
                console.log('player 1 card 1 = ' + p1nc1);
                document.getElementById('p1c4').id = 'p1nc1';
            }
            if (crib1 != random5 && crib2 != random5 && crib3 != random5 && crib4 != random5 && p1nc1 != random1 && p1nc1 != random2 && p1nc1 != random3 && p1nc1 != random4) {//if this card is not in the crib or in the hand
                p1nc1 = random5;//then it is player one new card one
                console.log('player 1 card 1 = ' + p1nc1);
                document.getElementById('p1c5').id = 'p1nc1';
            }
            if (crib1 != random6 && crib2 != random6 && crib3 != random6 && crib4 != random6 && p1nc1 != random1 && p1nc1 != random2 && p1nc1 != random3 && p1nc1 != random4 && p1nc1 != random5) {//if this card is not in the crib or in the hand
                p1nc1 = random6;//then it is player one new card one
                console.log('player 1 card 1 = ' + p1nc1);
                document.getElementById('p1c6').id = 'p1nc1';
            }
        }
        if (p1nc2 == -15) {
            if (crib1 != random1 && crib2 != random1 && crib3 != random1 && crib4 != random1 && p1nc1 != random1) {//if this card is not in the crib or in the hand
                p1nc2 = random1;//then it is player one new card two
                console.log('player 1 card 2 = ' + p1nc2);
                document.getElementById('p1c1').id = 'p1nc2';
            }
            if ((crib1 != random2 && crib2 != random2 && crib3 != random2 && crib4 != random2) && p1nc2 != random1 && p1nc1 != random2) {//if this card is not in the crib or in the hand
                p1nc2 = random2;//then it is player one new card two
                console.log('player 1 card 2 = ' + p1nc2);
                document.getElementById('p1c2').id = 'p1nc2';
            }
            if (crib1 != random3 && crib2 != random3 && crib3 != random3 && crib4 != random3 && p1nc2 != random1 && p1nc2 != random2 && p1nc1 != random3) {//if this card is not in the crib or in the hand
                p1nc2 = random3;//then it is player one new card two
                console.log('player 1 card 2 = ' + p1nc2);
                document.getElementById('p1c3').id = 'p1nc2';
            }
            if (crib1 != random4 && crib2 != random4 && crib3 != random4 && crib4 != random4 && p1nc2 != random1 && p1nc2 != random2 && p1nc2 != random3 && p1nc1 != random4) {//if this card is not in the crib or in the hand
                p1nc2 = random4;//then it is player one new card two
                console.log('player 1 card 2 = ' + p1nc2);
                document.getElementById('p1c4').id = 'p1nc2';
            }
            if (crib1 != random5 && crib2 != random5 && crib3 != random5 && crib4 != random5 && p1nc2 != random1 && p1nc2 != random2 && p1nc2 != random3 && p1nc2 != random4 && p1nc1 != random5) {//if this card is not in the crib or in the hand
                p1nc2 = random5;//then it is player one new card two
                console.log('player 1 card 2 = ' + p1nc2);
                document.getElementById('p1c5').id = 'p1nc2';
            }
            if (crib1 != random6 && crib2 != random6 && crib3 != random6 && crib4 != random6 && p1nc2 != random1 && p1nc2 != random2 && p1nc2 != random3 && p1nc2 != random4 && p1nc2 != random5 && p1nc1 != random6) {//if this card is not in the crib or in the hand
                p1nc2 = random6;//then it is player one new card two
                console.log('player 1 card 2 = ' + p1nc2);
                document.getElementById('p1c6').id = 'p1nc2';
            }
        }
        if (p1nc3 == -16) {
            if (crib1 != random1 && crib2 != random1 && crib3 != random1 && crib4 != random1 && p1nc1 != random1 && p1nc2 != random1) {//if this card is not in the crib or in the hand
                p1nc3 = random1;//then it is player one new card three
                console.log('player 1 card 3 = ' + p1nc3);
                document.getElementById('p1c1').id = 'p1nc3';
            }
            if ((crib1 != random2 && crib2 != random2 && crib3 != random2 && crib4 != random2) && p1nc3 != random1 && p1nc1 != random2 && p1nc2 != random2) {//if this card is not in the crib or in the hand
                p1nc3 = random2;//then it is player one new card three
                console.log('player 1 card 3 = ' + p1nc3);
                document.getElementById('p1c2').id = 'p1nc3';
            }
            if (crib1 != random3 && crib2 != random3 && crib3 != random3 && crib4 != random3 && p1nc3 != random1 && p1nc3 != random2 && p1nc1 != random3 && p1nc2 != random3) {//if this card is not in the crib or in the hand
                p1nc3 = random3;//then it is player one new card three
                console.log('player 1 card 3 = ' + p1nc3);
                document.getElementById('p1c3').id = 'p1nc3';
            }
            if (crib1 != random4 && crib2 != random4 && crib3 != random4 && crib4 != random4 && p1nc3 != random1 && p1nc3 != random2 && p1nc3 != random3 && p1nc1 != random4 && p1nc2 != random4) {//if this card is not in the crib or in the hand
                p1nc3 = random4;//then it is player one new card three
                console.log('player 1 card 3 = ' + p1nc3);
                document.getElementById('p1c4').id = 'p1nc3';
            }
            if (crib1 != random5 && crib2 != random5 && crib3 != random5 && crib4 != random5 && p1nc3 != random1 && p1nc3 != random2 && p1nc3 != random3 && p1nc3 != random4 && p1nc1 != random5 && p1nc2 != random5) {//if this card is not in the crib or in the hand
                p1nc3 = random5;//then it is player one new card three
                console.log('player 1 card 3 = ' + p1nc3);
                document.getElementById('p1c5').id = 'p1nc3';
            }
            if (crib1 != random6 && crib2 != random6 && crib3 != random6 && crib4 != random6 && p1nc3 != random1 && p1nc3 != random2 && p1nc3 != random3 && p1nc3 != random4 && p1nc3 != random5 && p1nc1 != random6 && p1nc2 != random6) {//if this card is not in the crib or in the hand
                p1nc3 = random6;//then it is player one new card three
                console.log('player 1 card 3 = ' + p1nc3);
                document.getElementById('p1c6').id = 'p1nc3';
            }
        }
        if (p1nc4 == -17) {
            if (crib1 != random1 && crib2 != random1 && crib3 != random1 && crib4 != random1 && p1nc1 != random1 && p1nc2 != random1 && p1nc3 != random1) {//if this card is not in the crib or in the hand
                p1nc4 = random1;//then it is player one new card four
                console.log('player 1 card 4 = ' + p1nc4);
                document.getElementById('p1c1').id = 'p1nc4';
            }
            if ((crib1 != random2 && crib2 != random2 && crib3 != random2 && crib4 != random2) && p1nc4 != random1 && p1nc1 != random2 && p1nc2 != random2 && p1nc3 != random2) {//if this card is not in the crib or in the hand
                p1nc4 = random2;//then it is player one new card four
                console.log('player 1 card 4 = ' + p1nc4);
                document.getElementById('p1c2').id = 'p1nc4';
            }
            if (crib1 != random3 && crib2 != random3 && crib3 != random3 && crib4 != random3 && p1nc4 != random1 && p1nc4 != random2 && p1nc1 != random3 && p1nc2 != random3 && p1nc3 != random3) {//if this card is not in the crib or in the hand
                p1nc4 = random3;//then it is player one new card four
                console.log('player 1 card 4 = ' + p1nc4);
                document.getElementById('p1c3').id = 'p1nc4';
            }
            if (crib1 != random4 && crib2 != random4 && crib3 != random4 && crib4 != random4 && p1nc4 != random1 && p1nc4 != random2 && p1nc4 != random3 && p1nc1 != random4 && p1nc2 != random4 && p1nc3 != random4) {//if this card is not in the crib or in the hand
                p1nc4 = random4;//then it is player one new card four
                console.log('player 1 card 4 = ' + p1nc4);
                document.getElementById('p1c4').id = 'p1nc4';
            }
            if (crib1 != random5 && crib2 != random5 && crib3 != random5 && crib4 != random5 && p1nc4 != random1 && p1nc4 != random2 && p1nc4 != random3 && p1nc4 != random4 && p1nc1 != random5 && p1nc2 != random5 && p1nc3 != random5) {//if this card is not in the crib or in the hand
                p1nc4 = random5;//then it is player one new card four
                console.log('player 1 card 4 = ' + p1nc4);
                document.getElementById('p1c5').id = 'p1nc4';
            }
            if (crib1 != random6 && crib2 != random6 && crib3 != random6 && crib4 != random6 && p1nc4 != random1 && p1nc4 != random2 && p1nc4 != random3 && p1nc4 != random4 && p1nc4 != random5 && p1nc1 != random6 && p1nc2 != random6 && p1nc3 != random6) {//if this card is not in the crib or in the hand
                p1nc4 = random6;//then it is player one new card four
                console.log('player 1 card 4 = ' + p1nc4);
                document.getElementById('p1c6').id = 'p1nc4';
            }
        }
        if (p2nc1 == -18) {
            if (crib1 != random7 && crib2 != random7 && crib3 != random7 && crib4 != random7) {//if this card is not in the crib
                p2nc1 = random7;//then it is player two new card one
                console.log('player 2 card 1 = ' + p2nc1);
                document.getElementById('p2c1').id = 'p2nc1';
            }
            if ((crib1 != random8 && crib2 != random8 && crib3 != random8 && crib4 != random8) && p2nc1 != random7) {//if this card is not in the crib or in the hand
                p2nc1 = random8;//then it is player two new card one
                console.log('player 2 card 1 = ' + p2nc1);
                document.getElementById('p2c2').id = 'p2nc1';
            }
            if (crib1 != random9 && crib2 != random9 && crib3 != random9 && crib4 != random9 && p2nc1 != random7 && p2nc1 != random8) {//if this card is not in the crib or in the hand
                p2nc1 = random9;//then it is player two new card one
                console.log('player 2 card 1 = ' + p2nc1);
                document.getElementById('p2c3').id = 'p2nc1';
            }
            if (crib1 != random10 && crib2 != random10 && crib3 != random10 && crib4 != random10 && p2nc1 != random7 && p2nc1 != random8 && p2nc1 != random9) {//if this card is not in the crib or in the hand
                p2nc1 = random10;//then it is player two new card one
                console.log('player 2 card 1 = ' + p2nc1);
                document.getElementById('p2c4').id = 'p2nc1';
            }
            if (crib1 != random11 && crib2 != random11 && crib3 != random11 && crib4 != random11 && p2nc1 != random7 && p2nc1 != random8 && p2nc1 != random9 && p2nc1 != random10) {//if this card is not in the crib or in the hand
                p2nc1 = random11;//then it is player two new card one
                console.log('player 2 card 1 = ' + p2nc1);
                document.getElementById('p2c5').id = 'p2nc1';
            }
            if (crib1 != random12 && crib2 != random12 && crib3 != random12 && crib4 != random12 && p2nc1 != random7 && p2nc1 != random8 && p2nc1 != random9 && p2nc1 != random10 && p2nc1 != random11) {//if this card is not in the crib or in the hand
                p2nc1 = random12;//then it is player two new card one
                console.log('player 2 card 1 = ' + p2nc1);
                document.getElementById('p2c6').id = 'p2nc1';
            }
        }
        if (p2nc2 == -19) {
            if (crib1 != random7 && crib2 != random7 && crib3 != random7 && crib4 != random7 && p2nc1 != random7) {//if this card is not in the crib or in the hand
                p2nc2 = random7;//then it is player two new card two
                console.log('player 2 card 2 = ' + p2nc2);
                document.getElementById('p2c1').id = 'p2nc2';
            }
            if ((crib1 != random8 && crib2 != random8 && crib3 != random8 && crib4 != random8) && p2nc2 != random7 && p2nc1 != random8) {//if this card is not in the crib or in the hand
                p2nc2 = random8;//then it is player two new card two
                console.log('player 2 card 2 = ' + p2nc2);
                document.getElementById('p2c2').id = 'p2nc2';
            }
            if (crib1 != random9 && crib2 != random9 && crib3 != random9 && crib4 != random9 && p2nc2 != random7 && p2nc2 != random8 && p2nc1 != random9) {//if this card is not in the crib or in the hand
                p2nc2 = random9;//then it is player two new card two
                console.log('player 2 card 2 = ' + p2nc2);
                document.getElementById('p2c3').id = 'p2nc2';
            }
            if (crib1 != random10 && crib2 != random10 && crib3 != random10 && crib4 != random10 && p2nc2 != random7 && p2nc2 != random8 && p2nc2 != random9 && p2nc1 != random10) {//if this card is not in the crib or in the hand
                p2nc2 = random10;//then it is player two new card two
                console.log('player 2 card 2 = ' + p2nc2);
                document.getElementById('p2c4').id = 'p2nc2';
            }
            if (crib1 != random11 && crib2 != random11 && crib3 != random11 && crib4 != random11 && p2nc2 != random7 && p2nc2 != random8 && p2nc2 != random9 && p2nc2 != random10 && p2nc1 != random11) {//if this card is not in the crib or in the hand
                p2nc2 = random11;//then it is player two new card two
                console.log('player 2 card 2 = ' + p2nc2);
                document.getElementById('p2c5').id = 'p2nc2';
            }
            if (crib1 != random12 && crib2 != random12 && crib3 != random12 && crib4 != random12 && p2nc2 != random7 && p2nc2 != random8 && p2nc2 != random9 && p2nc2 != random10 && p2nc2 != random11 && p2nc1 != random12) {//if this card is not in the crib or in the hand
                p2nc2 = random12;//then it is player two new card two
                console.log('player 2 card 2 = ' + p2nc2);
                document.getElementById('p2c6').id = 'p2nc2';
            }
        }
        if (p2nc3 == -20) {
            if (crib1 != random7 && crib2 != random7 && crib3 != random7 && crib4 != random7 && p2nc1 != random7 && p2nc2 != random7) {//if this card is not in the crib or in the hand
                p2nc3 = random7;//then it is player two new card three
                console.log('player 2 card 3 = ' + p2nc3);
                document.getElementById('p2c1').id = 'p2nc3';
            }
            if ((crib1 != random8 && crib2 != random8 && crib3 != random8 && crib4 != random8) && p2nc3 != random7 && p2nc1 != random8 && p2nc2 != random8) {//if this card is not in the crib or in the hand
                p2nc3 = random8;//then it is player two new card three
                console.log('player 2 card 3 = ' + p2nc3);
                document.getElementById('p2c2').id = 'p2nc3';
            }
            if (crib1 != random9 && crib2 != random9 && crib3 != random9 && crib4 != random9 && p2nc3 != random7 && p2nc3 != random8 && p2nc1 != random9 && p2nc2 != random9) {//if this card is not in the crib or in the hand
                p2nc3 = random9;//then it is player two new card three
                console.log('player 2 card 3 = ' + p2nc3);
                document.getElementById('p2c3').id = 'p2nc3';
            }
            if (crib1 != random10 && crib2 != random10 && crib3 != random10 && crib4 != random10 && p2nc3 != random7 && p2nc3 != random8 && p2nc3 != random9 && p2nc1 != random10 && p2nc2 != random10) {//if this card is not in the crib or in the hand
                p2nc3 = random10;//then it is player two new card three
                console.log('player 2 card 3 = ' + p2nc3);
                document.getElementById('p2c4').id = 'p2nc3';
            }
            if (crib1 != random11 && crib2 != random11 && crib3 != random11 && crib4 != random11 && p2nc3 != random7 && p2nc3 != random8 && p2nc3 != random9 && p2nc3 != random10 && p2nc1 != random11 && p2nc2 != random11) {//if this card is not in the crib or in the hand
                p2nc3 = random11;//then it is player two new card three
                console.log('player 2 card 3 = ' + p2nc3);
                document.getElementById('p2c5').id = 'p2nc3';
            }
            if (crib1 != random12 && crib2 != random12 && crib3 != random12 && crib4 != random12 && p2nc3 != random7 && p2nc3 != random8 && p2nc3 != random9 && p2nc3 != random10 && p2nc3 != random11 && p2nc1 != random12 && p2nc2 != random12) {//if this card is not in the crib or in the hand
                p2nc3 = random12;//then it is player two new card three
                console.log('player 2 card 3 = ' + p2nc3);
                document.getElementById('p2c6').id = 'p2nc3';
            }
        }
        if (p2nc4 == -21) {
            if (crib1 != random7 && crib2 != random7 && crib3 != random7 && crib4 != random7 && p2nc1 != random7 && p2nc2 != random7 && p2nc3 != random7) {//if this card is not in the crib or in the hand
                p2nc4 = random7;//then it is player two new card four
                console.log('player 2 card 4 = ' + p2nc4);
                document.getElementById('p2c1').id = 'p2nc4';
            }
            if ((crib1 != random8 && crib2 != random8 && crib3 != random8 && crib4 != random8) && p2nc4 != random7 && p2nc1 != random8 && p2nc2 != random8 && p2nc3 != random8) {//if this card is not in the crib or in the hand
                p2nc4 = random8;//then it is player two new card four
                console.log('player 2 card 4 = ' + p2nc4);
                document.getElementById('p2c2').id = 'p2nc4';
            }
            if (crib1 != random9 && crib2 != random9 && crib3 != random9 && crib4 != random9 && p2nc4 != random7 && p2nc4 != random8 && p2nc1 != random9 && p2nc2 != random9 && p2nc3 != random9) {//if this card is not in the crib or in the hand
                p2nc4 = random9;//then it is player two new card four
                console.log('player 2 card 4 = ' + p2nc4);
                document.getElementById('p2c3').id = 'p2nc4';
            }
            if (crib1 != random10 && crib2 != random10 && crib3 != random10 && crib4 != random10 && p2nc4 != random7 && p2nc4 != random8 && p2nc4 != random9 && p2nc1 != random10 && p2nc2 != random10 && p2nc3 != random10) {//if this card is not in the crib or in the hand
                p2nc4 = random10;//then it is player two new card four
                console.log('player 2 card 4 = ' + p2nc4);
                document.getElementById('p2c4').id = 'p2nc4';
            }
            if (crib1 != random11 && crib2 != random11 && crib3 != random11 && crib4 != random11 && p2nc4 != random7 && p2nc4 != random8 && p2nc4 != random9 && p2nc4 != random10 && p2nc1 != random11 && p2nc2 != random11 && p2nc3 != random11) {//if this card is not in the crib or in the hand
                p2nc4 = random11;//then it is player two new card four
                console.log('player 2 card 4 = ' + p2nc4);
                document.getElementById('p2c5').id = 'p2nc4';
            }
            if (crib1 != random12 && crib2 != random12 && crib3 != random12 && crib4 != random12 && p2nc4 != random7 && p2nc4 != random8 && p2nc4 != random9 && p2nc4 != random10 && p2nc4 != random11 && p2nc1 != random12 && p2nc2 != random12 && p2nc3 != random12) {//if this card is not in the crib or in the hand
                p2nc4 = random12;//then it is player two new card four
                console.log('player 2 card 4 = ' + p2nc4);
                document.getElementById('p2c6').id = 'p2nc4';
            }
        }
        playCards();//the cards can now be played in the 'pegging round'
    }
}
function cutDeck() {//the deck is 'cut', and the 'cut card' is determined
    document.getElementById('cut').style.display = 'block';
    document.getElementById('cut').addEventListener('click', function (cutDeck) {
        random = Math.ceil(Math.random() * 52);//choose a random card
        cutValue = random;
        //make sure it's not a repeat
        while (cutValue == random1 || cutValue == random2 || cutValue == random3 || cutValue == random4 || cutValue == random5 || cutValue == random6 || cutValue == random7 || cutValue == random8 || cutValue == random9 || cutValue == random10 || cutValue == random11 || cutValue == random12) {
            cutValue = Math.ceil(Math.random() * 52);
        }
        document.getElementById('restOfDeck').src = 'images/number/' + cutValue + '.png';
        document.getElementById('cut').style.display = 'none';
        if (cutValue==11 || cutValue==24 || cutValue==37 || cutValue==50) {//the player who had the crib (player one in this case) gets two points if a jack is cut
            finalMove = 2;
            moveRightRed();
        }
    })
}
var pic1 = 'one';//the url of card one's image
var pic2 = 'two';//the url of card two's image
var pic3 = 'three';//the url of card three's image
var pic4 = 'four';//the url of card four's image
var pic5 = 'five';//the url of card five's image
var pic6 = 'six';//the url of card six's image
var pic7 = 'seven';//the url of card seven's image
var pic8 = 'eight';//the url of card eight's image
var p1p = 0;//player one played value
var p2p = 0;//player two played value
var pcList = new Array();//played cards list
var p1Cards = new Array();//player one cards
var p2Cards = new Array();//player two cards
var c1 = false;//card 1 -- was this the card just played?
var c2 = false;//card 2 -- was this the card just played?
var c3 = false;//card 3 -- was this the card just played?
var c4 = false;//card 4 -- was this the card just played?
var c5 = false;//card 5 -- was this the card just played?
var c6 = false;//card 6 -- was this the card just played?
var c7 = false;//card 7 -- was this the card just played?
var c8 = false;//card 8 -- was this the card just played?
var c1Click = 0;//number of times card 1 was clicked
var c2Click = 0;//number of times card 2 was clicked
var c3Click = 0;//number of times card 3 was clicked
var c4Click = 0;//number of times card 4 was clicked
var c5Click = 0;//number of times card 5 was clicked
var c6Click = 0;//number of times card 6 was clicked
var c7Click = 0;//number of times card 7 was clicked
var c8Click = 0;//number of times card 8 was clicked
var sayGoP1 = false;//did player one say go?
var sayGoP2 = false;//did player two say go?
var pcListRuns = new Array();//for counting runs
function playCards() {//playing cards for the 'pegging round'
    var p1nc1Over31;//is player one new card one over 31?
    var p1nc2Over31;//is player one new card two over 31?
    var p1nc3Over31;//is player one new card three over 31?
    var p1nc4Over31;//is player one new card four over 31?
    var p2nc1Over31;//is player two new card one over 31?
    var p2nc2Over31;//is player two new card two over 31?
    var p2nc3Over31;//is player two new card three over 31?
    var p2nc4Over31;//is player two new card four over 31?
    //these are bringing the card values down from larger numbers into their original value (eg. 26 goes to 13 [they're both kings, but the 13 is the lowest value denoting that])
    for (var x = p1nc1; x > 0; x = x - 13) {
        p1nc1Over31 = x;
    }
    for (var x = p1nc2; x > 0; x = x - 13) {
        p1nc2Over31 = x;
    }
    for (var x = p1nc3; x > 0; x = x - 13) {
        p1nc3Over31 = x;
    }
    for (var x = p1nc4; x > 0; x = x - 13) {
        p1nc4Over31 = x;
    }
    for (var x = p2nc1; x > 0; x = x - 13) {
        p2nc1Over31 = x;
    }
    for (var x = p2nc2; x > 0; x = x - 13) {
        p2nc2Over31 = x;
    }
    for (var x = p2nc3; x > 0; x = x - 13) {
        p2nc3Over31 = x;
    }
    for (var x = p2nc4; x > 0; x = x - 13) {
        p2nc4Over31 = x;
    }
    //moving the values into their arrays
    p1Cards[0] = p1nc1Over31;
    p1Cards[1] = p1nc2Over31;
    p1Cards[2] = p1nc3Over31;
    p1Cards[3] = p1nc4Over31;
    p2Cards[0] = p2nc1Over31;
    p2Cards[1] = p2nc2Over31;
    p2Cards[2] = p2nc3Over31;
    p2Cards[3] = p2nc4Over31;
    document.getElementById('p1nc1').addEventListener('click', function (playCard) {//event listener for player one new card one
        if (c1 == false) {
            for (var x = p1nc1; x > 0; x = x - 13) {//bringing the card values down from larger numbers into their original value (eg. 26 goes to 13 [they're both kings, but the 13 is the lowest value denoting that])
                var p1nc1Val = x;
            }
            if (p1nc1Val == 11 || p1nc1Val == 12 || p1nc1Val == 13) {//if the card is a J,Q or K, make its value 10
                p1p = 10;
                pcList.unshift(p1nc1Val);//add the value to the card list
            }
            else {
                p1p = p1nc1Val;
                pcList.unshift(p1p);//add the value to the card list
            }
            pic1 = document.getElementById('p1nc1').src;
            if ((pegCount + p1p) < 32) {//if the played card plus the current pegging value is 31 or less, then add it to the pegging value
              c1Click++;
              document.getElementById('p1p').src = 'images/number/' + p1nc1 + '.png';
              document.getElementById('p1nc1').src = 'images/questionCard.png';
              pic1 = 'images/questionCard.png';
              bringBackCards(1, p1p);//the first value is what card was clicked. The second value is the value of the played card
            }
            else {
              pcList.shift();//if it was not less than 32, then forget this ever happened
            }
        }
        if (c1Click == 1){
            c1 = true;//this is so that once the card is successfully clicked, it can't be clicked again
        }
    })
    document.getElementById('p1nc2').addEventListener('click', function (playCard) {//event listener for player one new card two
        if (c2 == false) {
            for (var x = p1nc2; x > 0; x = x - 13) {//bringing the card values down from larger numbers into their original value (eg. 26 goes to 13 [they're both kings, but the 13 is the lowest value denoting that])
                var p1nc2Val = x;
            }
            if (p1nc2Val == 11 || p1nc2Val == 12 || p1nc2Val == 13) {//if the card is a J,Q or K, make its value 10
                p1p = 10;
                pcList.unshift(p1nc2Val);//add the value to the card list
            }
            else {
                p1p = p1nc2Val;
                pcList.unshift(p1p);//add the value to the card list
            }
            pic2 = document.getElementById('p1nc2').src;
            if ((pegCount + p1p) < 32) {//if the played card plus the current pegging value is 31 or less, then add it to the pegging value
              c2Click++;
              document.getElementById('p1p').src = 'images/number/' + p1nc2 + '.png';
              document.getElementById('p1nc2').src = 'images/questionCard.png';
              pic2 = 'images/questionCard.png';
              bringBackCards(2, p1p);//the first value is what card was clicked. The second value is the value of the played card
            }
            else {
              pcList.shift();//if it was not less than 32, then forget this ever happened
            }
        }
        if (c2Click == 1){
            c2 = true;//this is so that once the card is successfully clicked, it can't be clicked again
        }
    })
    document.getElementById('p1nc3').addEventListener('click', function (playCard) {//event listener for player one new card three
        if (c3 == false) {
            for (var x = p1nc3; x > 0; x = x - 13) {//bringing the card values down from larger numbers into their original value (eg. 26 goes to 13 [they're both kings, but the 13 is the lowest value denoting that])
                var p1nc3Val = x;
            }
            if (p1nc3Val == 11 || p1nc3Val == 12 || p1nc3Val == 13) {//if the card is a J,Q or K, make its value 10
                p1p = 10;
                pcList.unshift(p1nc3Val);//add the value to the card list
            }
            else {
                p1p = p1nc3Val;
                pcList.unshift(p1p);//add the value to the card list
            }
            pic3 = document.getElementById('p1nc3').src;
            if ((pegCount + p1p) < 32) {//if the played card plus the current pegging value is 31 or less, then add it to the pegging value
              c3Click++;
              document.getElementById('p1p').src = 'images/number/' + p1nc3 + '.png';
              document.getElementById('p1nc3').src = 'images/questionCard.png';
              pic3 = 'images/questionCard.png';
              bringBackCards(3, p1p);//the first value is what card was clicked. The second value is the value of the played card
            }
            else {
              pcList.shift();//if it was not less than 32, then forget this ever happened
            }
        }
        if (c3Click == 1){
            c3 = true;//this is so that once the card is successfully clicked, it can't be clicked again
        }
    })
    document.getElementById('p1nc4').addEventListener('click', function (playCard) {//event listener for player one new card four
        if (c4 == false) {
            for (var x = p1nc4; x > 0; x = x - 13) {//bringing the card values down from larger numbers into their original value (eg. 26 goes to 13 [they're both kings, but the 13 is the lowest value denoting that])
                var p1nc4Val = x;
            }
            if (p1nc4Val == 11 || p1nc4Val == 12 || p1nc4Val == 13) {//if the card is a J,Q or K, make its value 10
                p1p = 10;
                pcList.unshift(p1nc4Val);//add the value to the card list
            }
            else {
                p1p = p1nc4Val;
                pcList.unshift(p1p);//add the value to the card list
            }
            pic4 = document.getElementById('p1nc4').src;
            if ((pegCount + p1p) < 32) {//if the played card plus the current pegging value is 31 or less, then add it to the pegging value
              c4Click++;
              document.getElementById('p1p').src = 'images/number/' + p1nc4 + '.png';
              document.getElementById('p1nc4').src = 'images/questionCard.png';
              pic4 = 'images/questionCard.png';
              bringBackCards(4, p1p);//the first value is what card was clicked. The second value is the value of the played card
            }
            else {
              pcList.shift();//if it was not less than 32, then forget this ever happened
            }
        }
        if (c4Click == 1){
            c4 = true;//this is so that once the card is successfully clicked, it can't be clicked again
        }
    })
    document.getElementById('p2nc1').addEventListener('click', function (playCard) {//event listener for player two new card one
        if (c5 == false) {
            for (var x = p2nc1; x > 0; x = x - 13) {//bringing the card values down from larger numbers into their original value (eg. 26 goes to 13 [they're both kings, but the 13 is the lowest value denoting that])
                var p2nc1Val = x;
            }
            if (p2nc1Val == 11 || p2nc1Val == 12 || p2nc1Val == 13) {//if the card is a J,Q or K, make its value 10
                p2p = 10;
                pcList.unshift(p2nc1Val);//add the value to the card list
            }
            else {
                p2p = p2nc1Val;
                pcList.unshift(p2p);//add the value to the card list
            }
            pic5 = document.getElementById('p2nc1').src;
            if ((pegCount + p2p) < 32) {//if the played card plus the current pegging value is 31 or less, then add it to the pegging value
              c5Click++;
              document.getElementById('p2p').src = 'images/number/' + p2nc1 + '.png';
              document.getElementById('p2nc1').src = 'images/questionCard.png';
              pic5 = 'images/questionCard.png';
              bringBackCards(5, p2p);//the first value is what card was clicked. The second value is the value of the played card
            }
            else {
              pcList.shift();//if it was not less than 32, then forget this ever happened
            }
        }
        if (c5Click == 1){
            c5 = true;//this is so that once the card is successfully clicked, it can't be clicked again
        }
    })
    document.getElementById('p2nc2').addEventListener('click', function (playCard) {//event listener for player two new card two
        if (c6 == false) {
            for (var x = p2nc2; x > 0; x = x - 13) {//bringing the card values down from larger numbers into their original value (eg. 26 goes to 13 [they're both kings, but the 13 is the lowest value denoting that])
                var p2nc2Val = x;
            }
            if (p2nc2Val == 11 || p2nc2Val == 12 || p2nc2Val == 13) {//if the card is a J,Q or K, make its value 10
                p2p = 10;
                pcList.unshift(p2nc2Val);//add the value to the card list
            }
            else {
                p2p = p2nc2Val;
                pcList.unshift(p2p);//add the value to the card list
            }
            pic6 = document.getElementById('p2nc2').src;
            if ((pegCount + p2p) < 32) {//if the played card plus the current pegging value is 31 or less, then add it to the pegging value
              c6Click++;
              document.getElementById('p2p').src = 'images/number/' + p2nc2 + '.png';
              document.getElementById('p2nc2').src = 'images/questionCard.png';
              pic6 = 'images/questionCard.png';
              bringBackCards(6, p2p);//the first value is what card was clicked. The second value is the value of the played card
            }
            else {
              pcList.shift();//if it was not less than 32, then forget this ever happened
            }
        }
        if (c6Click == 1){
            c6 = true;//this is so that once the card is successfully clicked, it can't be clicked again
        }
    })
    document.getElementById('p2nc3').addEventListener('click', function (playCard) {//event listener for player two new card three
        if (c7 == false) {
            for (var x = p2nc3; x > 0; x = x - 13) {//bringing the card values down from larger numbers into their original value (eg. 26 goes to 13 [they're both kings, but the 13 is the lowest value denoting that])
                var p2nc3Val = x;
            }
            if (p2nc3Val == 11 || p2nc3Val == 12 || p2nc3Val == 13) {//if the card is a J,Q or K, make its value 10
                p2p = 10;
                pcList.unshift(p2nc3Val);//add the value to the card list
            }
            else {
                p2p = p2nc3Val;
                pcList.unshift(p2p);//add the value to the card list
            }
            pic7 = document.getElementById('p2nc3').src;
            if ((pegCount + p2p) < 32) {//if the played card plus the current pegging value is 31 or less, then add it to the pegging value
              c7Click++;
              document.getElementById('p2p').src = 'images/number/' + p2nc3 + '.png';
              document.getElementById('p2nc3').src = 'images/questionCard.png';
              pic7 = 'images/questionCard.png';
              bringBackCards(7, p2p);//the first value is what card was clicked. The second value is the value of the played card
            }
            else {
              pcList.shift();//if it was not less than 32, then forget this ever happened
            }
        }
        if (c7Click == 1){
            c7 = true;//this is so that once the card is successfully clicked, it can't be clicked again
        }
    })
    document.getElementById('p2nc4').addEventListener('click', function (playCard) {//event listener for player two new card four
        if (c8 == false) {
            for (var x = p2nc4; x > 0; x = x - 13) {//bringing the card values down from larger numbers into their original value (eg. 26 goes to 13 [they're both kings, but the 13 is the lowest value denoting that])
                var p2nc4Val = x;
            }
            if (p2nc4Val == 11 || p2nc4Val == 12 || p2nc4Val == 13) {//if the card is a J,Q or K, make its value 10
                p2p = 10;
                pcList.unshift(p2nc4Val);//add the value to the card list
            }
            else {
                p2p = p2nc4Val;
                pcList.unshift(p2p);//add the value to the card list
            }
            pic8 = document.getElementById('p2nc4').src;
            if ((pegCount + p2p) < 32) {//if the played card plus the current pegging value is 31 or less, then add it to the pegging value
              c8Click++;
              document.getElementById('p2p').src = 'images/number/' + p2nc4 + '.png';
              document.getElementById('p2nc4').src = 'images/questionCard.png';
              pic8 = 'images/questionCard.png';
              bringBackCards(8, p2p);//the first value is what card was clicked. The second value is the value of the played card
            }
            else {
              pcList.shift();//if it was not less than 32, then forget this ever happened
            }
        }
        if (c8Click == 1){
            c8 = true;//this is so that once the card is successfully clicked, it can't be clicked again
        }
    })
    document.getElementById('sayGoP1').addEventListener('click', function (sayGo) {//when the 'GO!' button for player one is clicked
      sayGoP1 = !sayGoP1;//toggle it on/off
      //these change the colour based on if the 'GO!' button is true or false
      if (sayGoP1==true) {
          document.getElementById('sayGoP1').style.backgroundColor = 'red';
      }
      else if (sayGoP1==false) {
          document.getElementById('sayGoP1').style.backgroundColor = 'green';
      }
        if (sayGoP1 == true && sayGoP2 == true) {//if both have said go, then reset the pegging count
          pegCount = 0;
        for (var remove = 0; remove < pcList.length + 1; remove++) {
          pcList.shift();
        }
        giveOnePointForGo(1);//this is set to 1, because if player one clicks go second (which is what happens here),
        //then player one should get the point
      }
    })
    document.getElementById('sayGoP2').addEventListener('click', function (sayGo) {//when the 'GO!' button for player two is clicked
      sayGoP2 = !sayGoP2;//toggle it on/off
      //these change the colour based on if the 'GO!' button is true or false
      if (sayGoP2==true) {
          document.getElementById('sayGoP2').style.backgroundColor = 'red';
      }
      else if (sayGoP2==false) {
          document.getElementById('sayGoP2').style.backgroundColor = 'green';
      }
        if (sayGoP1 == true && sayGoP2 == true) {//if both have said go, then reset the pegging count
          pegCount = 0;
        for (var remove = 0; remove < pcList.length + 1; remove++) {
          pcList.shift();
        }
        giveOnePointForGo(5);//this is set to 5, because if player two clicks go second (which is what happens here),
        //then player two should get the point
      }
    })
    function giveOnePointForGo(cardNum) {//gives one point to the player who played the last card in the round
        finalMove = 1;
        if (cardNum<5) {
            moveRightRed();
        }
        else {
            moveRightBlue();
        }
    }
}
var pegCount = 0;//the value of the current pegging round
function countPlayCards(cardNum, pegVal) {
  if ((pegCount+pegVal)<32){//if the round plus the played card is less than 32, then add the played card's value to the pegging round's value
        pegCount += pegVal;
        if (pegCount==31){//if it is equal to 31
            finalMove = 2;//give two points to the player who got to 31
            if (cardNum<5) {
                moveRightRed();
            }
            else {
                moveRightBlue();
            }
            pegCount = 0;//end the round and start a new one
        }
        else if (pegCount==15) {//if it is equal to 15
            finalMove = 2;//give two points to the player who got to 15
            if (cardNum<5) {
                moveRightRed();
            }
            else {
                moveRightBlue();
            }
        }
        if (pcList[0]==pcList[1]) {//if the last card played has the same value as the card before it
            finalMove = 2;//give two points to the player who played the most recent card
            if (pcList[2]==pcList[1]) {//if it is a three-in-a-row
                finalMove += 4;//give four more points to the player who played the most recent card
                if (pcList[3]==pcList[2]) {//if it is a four-in-a-row
                    finalMove += 6;//give six more points to the player who played the most recent card
                }
            }
            if (cardNum<5) {
                moveRightRed();
            }
            else {
                moveRightBlue();
            }
        }
        else if (pcList[0]!=pcList[1] && pcList[1]!=undefined) {//if there are at least two cards played and they are different, then there may be a run
            for (var aa = 0; aa < 7; aa++) { //we start with 7 long, as the longest run we can have is 7 cards
                pcListRuns[aa] = pcList[aa];
            }
            function sort() {
                pcListRuns.sort(function (a, b) { return a - b });//sort in ascending order
            }
            sort();
            console.log('-----WE HAVE A POSSIBLE RUN-----');
            if ((pcListRuns[1]-pcListRuns[0] == 1) && (pcListRuns[2]-pcListRuns[1] == 1) && (pcListRuns[3]-pcListRuns[2] == 1) && (pcListRuns[4]-pcListRuns[3] == 1) && (pcListRuns[5]-pcListRuns[4] == 1) && (pcListRuns[6]-pcListRuns[5] == 1)) {//if there are seven ascending cards
                finalMove = 7;//give the player seven points
                if (cardNum<5) {
                    moveRightRed();
                }
                else {
                    moveRightBlue();
                }
                console.log('-----WE HAVE A RUN OF 7-----');
            }
            else {
                for (var ab = 0; ab < 6; ab++) { 
                    pcListRuns[ab] = pcList[ab];
                }
                function sort() {
                    pcListRuns.sort(function (a, b) { return a - b });//sort in ascending order
                }
                sort();
                if ((pcListRuns[1]-pcListRuns[0] == 1) && (pcListRuns[2]-pcListRuns[1] == 1) && (pcListRuns[3]-pcListRuns[2] == 1) && (pcListRuns[4]-pcListRuns[3] == 1) && (pcListRuns[5]-pcListRuns[4] == 1)) {//if there are six ascending cards
                    finalMove = 6;//give the player six points
                    if (cardNum<5) {
                        moveRightRed();
                    }
                    else {
                        moveRightBlue();
                    }
                    console.log('-----WE HAVE A RUN OF 6-----');
                }
                else {
                    for (var ac = 0; ac < 5; ac++) { 
                        pcListRuns[ac] = pcList[ac];
                    }
                    function sort() {
                        pcListRuns.sort(function (a, b) { return a - b });//sort in ascending order
                    }
                    sort();
                    if ((pcListRuns[1]-pcListRuns[0] == 1) && (pcListRuns[2]-pcListRuns[1] == 1) && (pcListRuns[3]-pcListRuns[2] == 1) && (pcListRuns[4]-pcListRuns[3] == 1)) {//if there are five ascending cards
                        finalMove = 5;//give the player five points
                        if (cardNum<5) {
                            moveRightRed();
                        }
                        else {
                            moveRightBlue();
                        }
                        console.log('-----WE HAVE A RUN OF 5-----');
                    }
                    else {
                        for (var ad = 0; ad < 4; ad++) { 
                            pcListRuns[ad] = pcList[ad];
                        }
                        function sort() {
                            pcListRuns.sort(function (a, b) { return a - b });//sort in ascending order
                        }
                        sort();
                        if ((pcListRuns[1]-pcListRuns[0] == 1) && (pcListRuns[2]-pcListRuns[1] == 1) && (pcListRuns[3]-pcListRuns[2] == 1)) {//if there are four ascending cards
                            finalMove = 4;//give the player four points
                            if (cardNum<5) {
                                moveRightRed();
                            }
                            else {
                                moveRightBlue();
                            }
                            console.log('-----WE HAVE A RUN OF 4-----');
                        }
                        else {
                            for (var ae = 0; ae < 3; ae++) { 
                                pcListRuns[ae] = pcList[ae];
                            }
                            function sort() {
                                pcListRuns.sort(function (a, b) { return a - b });//sort in ascending order
                            }
                            sort();
                            if ((pcListRuns[1]-pcListRuns[0] == 1) && (pcListRuns[2]-pcListRuns[1] == 1)) {//if there are three ascending cards
                                finalMove = 3;//give the player three points
                                if (cardNum<5) {
                                    moveRightRed();
                                }
                                else {
                                    moveRightBlue();
                                }
                                console.log('-----WE HAVE A RUN OF 3-----');
                            }
                        }
                    }
                }
            }
        }
    }
}
function bringBackCards(cardNum, pegVal) {
    countPlayCards(cardNum, pegVal);//count the cards that have been played
    document.getElementById('pegCountNumSpan').innerHTML = + pegCount;
    if (((pic1 == pic2) && (pic2 == pic3) && (pic3 == pic4)) && ((pic5 == pic6) && (pic6 == pic7) && (pic7 == pic8))) {//if all of the cards have been played
        //change them back to their original cards
        pic1 = 'images/number/' + p1nc1 + '.png';
        pic2 = 'images/number/' + p1nc2 + '.png';
        pic3 = 'images/number/' + p1nc3 + '.png';
        pic4 = 'images/number/' + p1nc4 + '.png';
        document.getElementById('p1nc1').src = pic1;
        document.getElementById('p1nc2').src = pic2;
        document.getElementById('p1nc3').src = pic3;
        document.getElementById('p1nc4').src = pic4;
        pic5 = 'images/number/' + p2nc1 + '.png';
        pic6 = 'images/number/' + p2nc2 + '.png';
        pic7 = 'images/number/' + p2nc3 + '.png';
        pic8 = 'images/number/' + p2nc4 + '.png';
        document.getElementById('p2nc1').src = pic5;
        document.getElementById('p2nc2').src = pic6;
        document.getElementById('p2nc3').src = pic7;
        document.getElementById('p2nc4').src = pic8;
        finalMove = 1;//final player to play gets one point
        if (cardNum<5) {
            moveRightRed();
        }
        else {
            moveRightBlue();
        }
    }
}

//the code below was taken from W3Schools' game tutorial
var red1;//first red peg
var red2;//second red peg
var blue1;//first blue peg
var blue2;//second blue peg
var multiplier = 0;//how much the pegs mov by

function startGame() {
    red1 = new createPeg(10, 10, "red", 136, 22, -2);//width, height, colour, x, y of the peg
    red2 = new createPeg(10, 10, "red", 180, 22, 0);//width, height, colour, x, y of the peg
    blue1 = new createPeg(10, 10, "blue", 136, 56, -2);//width, height, colour, x, y of the peg
    blue2 = new createPeg(10, 10, "blue", 180, 56, 0);//width, height, colour, x, y of the peg
    myGameArea.start();
}

var myGameArea = {
    canvas: document.getElementById("gameCanvas"),//creates a canvas
    start: function () {
        this.canvas.width = 886;//width of the canvas
        this.canvas.height = 206;//height of the canvas
        this.context = this.canvas.getContext("2d");//makes the canvas 2D
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);//updates the canvas
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function createPeg(width, height, color, x, y, peg) {
    this.width = width;//width of the peg
    this.height = height;//height of the peg
    this.x = x;//x of the peg
    this.y = y;//y of the peg
    this.peg = peg;//the peg number of the peg
    this.update = function () {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

function updateGameArea() {//updates the canvas
    myGameArea.clear();
    red1.update();
    red2.update();
    blue1.update();
    blue2.update();
}

function moveLeftRed() {//moves the red pegs left the amount of points specified
    multiplier += finalMove;//the multiplier 
    if (red1.x > red2.x) {//if peg 1 is ahead of peg 2
        red1.x -= (16.412 * multiplier);//after much guessing and testing, I found that 16.412 multiplied by the amount of points works for the crib board
    }
    else if (red2.x > red1.x) {//if peg 2 is ahead of peg 1
        red2.x -= (16.412 * multiplier);//after much guessing and testing, I found that 16.412 multiplied by the amount of points works for the crib board
    }
    multiplier = 0;//set the multiplier back to zero
}

function moveRightRed() {//moves the red pegs right the amount of points specified
    multiplier += finalMove;//the multiplier
    if (red1.x < red2.x) {//if peg 2 is ahead of peg 1
        console.log("Starting peg: " + red1.peg);
        if (red1.peg == -2) {//if the first peg hasn't moved yet
            red1.x += (red2.x - red1.x) + (16.412 * multiplier);//after much guessing and testing, I found that 16.412 multiplied by the amount of points works for the crib board
            //this also makes up the space between the two pegs
            red1.x += 12;//amount of pixels between the end of the "nothing" holes and the first point hole
            red1.peg += finalMove + 2;//move the peg to whatever the score was plus the two (where the peg started)
        }
        else if (red1.peg < 36 && red1.peg > 0 && (red2.peg + finalMove) < 36) {//if the peg stays on the first straight stretch
            red1.x += (red2.x - red1.x) + (16.412 * multiplier);//move the peg
            red1.peg = red2.peg + finalMove;//move the peg value to what it should be
        }
        else if ((red2.peg + finalMove) == 36) {//if the peg lands in the 36th hole
            red1.x += (red2.x - red1.x) + (16.412 * multiplier) - 2;//the hole is slightly closer to the previous hole than on the straight stretch
            red1.peg = red2.peg + finalMove;//move the peg value
            console.log("WE GOT TO 36 RED1");
        }
        else if ((red2.peg + finalMove) == 37) {//if the peg lands in the 37th hole
            if (finalMove < 5) {//if the peg was close to the hole
                red1.x += (red2.x - red1.x) + (16.412 * multiplier + 8);//add a bit more to the normal movement
            }
            else if (finalMove < 15) {//if the peg was a bit farther from the hole
                red1.x += (red2.x - red1.x) + (16.412 * multiplier + 8);//add a bit more to the normal movement
            }
            else {//the peg was very far away
                red1.x += (red2.x - red1.x) + (16.412 * multiplier + 7);//add a bit more to the normal movement
            }
            red1.y = red2.y + 7;//move the peg down, as this is on the first curve
            red1.peg = red2.peg + finalMove;//move the peg value 
            console.log("WE GOT TO 37 RED1");
        }
        else if ((red2.peg + finalMove) == 38) {//if the peg lands in the 38th hole
            if (red2.peg < 37) {//if the peg is more than 1 hole away
                if (finalMove < 3) {//the peg was very close
                    red1.x += (red2.x - red1.x) + (16.412 * multiplier + 16);
                }
                else if (finalMove < 5) {//the peg was pretty close
                    red1.x += (red2.x - red1.x) + (16.412 * multiplier + 14);
                }
                else if (finalMove < 15) {//the peg was farther away
                    red1.x += (red2.x - red1.x) + (16.412 * multiplier + 14);
                }
                else {//the peg was very far away
                    red1.x += (red2.x - red1.x) + (16.412 * multiplier + 14);
                }
                red1.y = red2.y + 20;//move the peg down, as this is on the first curve
                console.log("WE GOT TO 38 FROM LESS THAN 37 RED1");
            }
            else {//the peg is one hole away
                red1.x += (red2.x - red1.x) + (16.412 * multiplier + 14);
                red1.y = red2.y + 5;//move the peg down, as this is on the first curve
                console.log("WE GOT TO 38 FROM 37 RED1");
            }
            red1.peg = red2.peg + finalMove;//move the peg value
        }
        else if ((red2.peg + finalMove) == 39) {//if the peg lands in the 39th hole
            if (red2.peg < 37) {//the peg is more than two holes away 
                if (finalMove < 5) {//the peg was very close
                    red1.x += (red2.x - red1.x) + (16.412 * multiplier + 17);
                }
                else if (finalMove < 15) {//the peg was farther away
                    red1.x += (red2.x - red1.x) + (16.412 * multiplier + 14);
                }
                else {//the peg was very far away
                    red1.x += (red2.x - red1.x) + (16.412 * multiplier + 16);
                }
                red1.y = red2.y + 40;//move the peg down, as this is on the first curve
                console.log("WE GOT TO 39 FROM LESS THAN 37 RED1");
            }
            else if (red2.peg < 38) {//the peg is two holes away
                red1.x += (red2.x - red1.x) + (16.412 * multiplier + 10);
                red1.y = red2.y + 15;//move the peg down, as this is on the first curve
                console.log("WE GOT TO 39 FROM LESS THAN 38 RED1");
            }
            else {//the peg is one hole away
                red1.x += (red2.x - red1.x) + (16.412 * multiplier + 3);
                red1.y = red2.y + 20;//move the peg down, as this is on the first curve
                console.log("WE GOT TO 39 FROM 38 RED1");
            }
            red1.peg = red2.peg + finalMove;//move the peg value
        }
        else if ((red2.peg + finalMove) == 40) {//if the peg lands in the 40th hole
            if (red2.peg < 37) {//the peg is more than 3 pegs away
                if (finalMove < 5){//the peg is very close
                    red1.x += (red2.x - red1.x) + (16.412 * multiplier + 8);
                }
                else if (finalMove < 15) {//the peg is farther away
                    red1.x += (red2.x - red1.x) + (16.412 * multiplier + 6);
                }
                else {//the peg is very far away
                    red1.x += (red2.x - red1.x) + (16.412 * multiplier + 6);
                }
                red1.y = red2.y + 60;//move the peg down, as this is on the first curve
                console.log("WE GOT TO 40 FROM LESS THAN 37 RED1");
            }
            else if (red2.peg < 38) {//the peg is more than 2 pegs away
                red1.x += (red2.x - red1.x) + (16.412 * multiplier);
                red1.y = red2.y + 25;//move the peg down, as this is on the first curve
                console.log("WE GOT TO 40 FROM LESS THAN 38 RED1");
            }
            else if (red2.peg < 39) {//the peg is 2 pegs away
                red1.x += (red2.x - red1.x) + (16.412 * multiplier - 8);
                red1.y = red2.y + 40;//move the peg down, as this is on the first curve
                console.log("WE GOT TO 40 FROM LESS THAN 39 RED1");
            }
            else {//the peg is 1 peg away
                red1.x += (red2.x - red1.x) + (16.412 * multiplier - 11);
                red1.y = red2.y + 20;//move the peg down, as this is on the first curve
                console.log("WE GOT TO 40 FROM 39 RED1");
            }
            red1.peg = red2.peg + finalMove;
        }
        console.log(red1.x + " is the red1 x");
        console.log(red1.y + " is the red1 y");
        console.log(red1.peg + " is the red1 peg");
    }
    else if (red2.x < red1.x) {//if peg one is ahead of peg two
        //all of these are the same as the ones above. Look there if you need to see what everything does
        console.log("Starting peg: " + red2.peg);
        if (red2.peg == 0) {//if the peg has not moved yet
            red2.x += (red1.x - red2.x) + (16.412 * multiplier);
            red2.peg += red1.peg + finalMove;
        }
        else if (red2.peg < 36 && red2.peg > 0 && (red1.peg + finalMove) < 36) {
            red2.x += (red1.x - red2.x) + (16.412 * multiplier);
            red2.peg = red1.peg + finalMove;
        }
        else if ((red1.peg + finalMove) == 36) {
            red2.x += (red1.x - red2.x) + (16.412 * multiplier) - 2;
            red2.peg = red1.peg + finalMove;
            console.log("WE GOT TO 36 RED2");
        }
        else if ((red1.peg + finalMove) == 37) {
            if (finalMove < 5) {
                red2.x += (red1.x - red2.x) + (16.412 * multiplier + 8);
            }
            else if (finalMove < 15) {
                red2.x += (red1.x - red2.x) + (16.412 * multiplier + 8);
            }
            else {
                red2.x += (red1.x - red2.x) + (16.412 * multiplier + 7);
            }
            red2.y = red1.y + 7;
            red2.peg = red1.peg + finalMove;
            console.log("WE GOT TO 37 RED2");
        }
        else if ((red1.peg + finalMove) == 38) {
            if (red1.peg < 37) {
                if (finalMove < 3) {
                    red2.x += (red1.x - red2.x) + (16.412 * multiplier + 16);
                }
                else if (finalMove < 5) {
                    red2.x += (red1.x - red2.x) + (16.412 * multiplier + 14);
                }
                else if (finalMove < 15) {
                    red2.x += (red1.x - red2.x) + (16.412 * multiplier + 14);
                }
                else {
                    red2.x += (red1.x - red2.x) + (16.412 * multiplier + 14);
                }
                red2.y = red1.y + 20;
                console.log("WE GOT TO 38 FROM LESS THAN 37 RED2");
            }
            else {
                red2.x += (red1.x - red2.x) + (16.412 * multiplier + 6);
                red2.y = red1.y + 13;
                console.log("WE GOT TO 38 FROM 37 RED2");
            }
            red2.peg = red1.peg + finalMove;
        }
        else if ((red1.peg + finalMove) == 39) {
            if (red1.peg < 37) {
                if (finalMove < 5) {
                    red2.x += (red1.x - red2.x) + (16.412 * multiplier + 17);
                }
                else if (finalMove < 15) {
                    red2.x += (red1.x - red2.x) + (16.412 * multiplier + 14);
                }
                else {
                    red2.x += (red1.x - red2.x) + (16.412 * multiplier + 16);
                }
                red2.y = red1.y + 40;
                console.log("WE GOT TO 39 FROM LESS THAN 37 RED2");
            }
            else if (red1.peg < 38) {
                red2.x += (red1.x - red2.x) + (16.412 * multiplier + 9);
                red2.y = red1.y + 33;
                console.log("WE GOT TO 39 FROM LESS THAN 38 RED2");
            }
            else {
                red2.x += (red1.x - red2.x) + (16.412 * multiplier + 3);
                red2.y = red1.y + 20;
                console.log("WE GOT TO 39 FROM 38 RED2");
            }
            red2.peg = red1.peg + finalMove;
        }
        else if ((red1.peg + finalMove) == 40) {
            if (red1.peg < 37) {
                if (finalMove < 5){
                    red2.x += (red1.x - red2.x) + (16.412 * multiplier + 8);
                }
                else if (finalMove < 15) {
                    red2.x += (red1.x - red2.x) + (16.412 * multiplier + 6);
                }
                else {
                    red2.x += (red1.x - red2.x) + (16.412 * multiplier + 6);
                }
                red2.y = red1.y + 60;
                console.log("WE GOT TO 40 FROM LESS THAN 37 RED2");
            }
            else if (red1.peg < 38) {
                red2.x += (red1.x - red2.x) + (16.412 * multiplier);
                red2.y = red1.y + 25;
                console.log("WE GOT TO 40 FROM LESS THAN 38 RED2");
            }
            else if (red1.peg < 39) {
                red2.x += (red1.x - red2.x) + (16.412 * multiplier - 8);
                red2.y = red1.y + 40;
                console.log("WE GOT TO 40 FROM LESS THAN 39 RED2");
            }
            else {
                red2.x += (red1.x - red2.x) + (16.412 * multiplier - 11);
                red2.y = red1.y + 20;
                console.log("WE GOT TO 40 FROM 39 RED2");
            }
            red2.peg = red1.peg + finalMove;
        }
        console.log(red2.x + " is the red2 x");
        console.log(red2.y + " is the red2 y");
        console.log(red2.peg + " is the red2 peg");
    }
    multiplier = 0;
}

function moveLeftBlue() {//moves the blue (player two) pegs left
    multiplier += finalMove;
    if (blue1.x > blue2.x) {
        blue1.x -= (16.412 * multiplier);
        console.log(blue1.x);
    }
    else if (blue2.x > blue1.x) {
        blue2.x -= (16.412 * multiplier);
        console.log(blue2.x);
    }
    multiplier = 0;
}

function moveRightBlue() {//moves the blue (player two) pegs right
    multiplier += finalMove;
    if (blue1.x < blue2.x) {//peg two is ahead of peg one
        console.log("Starting peg: " + blue1.peg);
        if (blue1.peg == -2) {//the peg hasn't moved yet
            blue1.x += (blue2.x - blue1.x) + (16.412 * multiplier);
            blue1.x += 12;//amount of pixels between the end of the "nothing" holes and the first point hole
            blue1.peg += finalMove + 2;
        }
        else if (blue1.peg < 36 && blue1.peg > 0 && (blue2.peg + finalMove) < 36) {//the peg is on the main stretch
            blue1.x += (blue2.x - blue1.x) + (16.412 * multiplier);
            blue1.peg = blue2.peg + finalMove;
        }
        console.log(blue1.x + " is the blue1 x");
        console.log(blue1.peg + " is the blue1 peg");
    }
    else if (blue2.x < blue1.x) {//peg one is ahead of peg two
        console.log("Starting peg: " + blue2.peg);
        if (blue2.peg == 0) {//the peg hasn't moved yet
            blue2.x += (blue1.x - blue2.x) + (16.412 * multiplier);
            blue2.peg += blue1.peg + finalMove;
        }
        else if (blue2.peg < 36 && blue2.peg > 0 && (blue1.peg + finalMove) < 36) {//the peg is on the main stretch
            blue2.x += (blue1.x - blue2.x) + (16.412 * multiplier);
            blue2.peg = blue1.peg + finalMove;
        }
        console.log(blue2.x + " is the blue2 x");
        console.log(blue2.peg + " is the blue2 peg");
    }
    multiplier = 0;
}


function go() {//this moves the pegs a specified, custom amount
    var newx = document.getElementById("goFast").value;
    var newnewx = parseInt(newx);//changes the string into an integer
    finalMove = newnewx;
}

var suit;//the changing suit value
var nibSuit;//the suit of the cut card
var twoSuit;//the suit of the first card
var threeSuit;//the suit of the second card
var fourSuit;//the suit of the third card
var fiveSuit;//the suit of the fourth card
var jack = false;//whether there is a jack or not
var jackSuit;//what is the suit of a jack
var final = 0;//the final amount for the pegs to move
var one;//first card placeholder
var two;//second card placeholder
var three;//third card placeholder
var four;//fourth card placeholder
var five;//fifth card placeholder
var fifteen = 0;//points scored from fifteens
var pair = 0;//points scored from pairs
var nibs = 0;//points scored from nibs
var flush = 0;//points scored from flushes
var run = 0;//points scored from runs
function score_fifteens(one, two, three, four, five) {//scores points based on how many 'fifteens' can be made
    //a fifteen is when any combination of cards in a hand adds up to fifteen
    //a fifteen is awarded two points
    var handFif = new Array(one, two, three, four, five);//the cards in the hand
    var score = 0;
    var as = 0; bs = 1; cs = 2; ds = 3;
    function sort(one, two, three, four, five) {//sorts the hand array in ascending order
        handFif.sort(function (a, b) { return a - b });
    }
    sort();
    for (a = as; a < 5; a++) {
        for (b = bs; b < 5; b++) {
            for (c = cs; c < 5; c++) {
                for (d = ds; d < 5; d++) {
                    var count = handFif[a] + handFif[b] + handFif[c] + handFif[d];//adds up four cards
                    if (count == 15) {
                        score += 2;
                    }
                }
                ds++;
                var count = handFif[a] + handFif[b] + handFif[c];//adds up three cards
                if (count == 15) {
                    score += 2;
                }
            }
            cs++;
            var count = handFif[a] + handFif[b];//adds up two cards
            if (count == 15) {
                score += 2;
            }
        }
        bs++;
    }
    var count = handFif[0] + handFif[1] + handFif[2] + handFif[3] + handFif[4];//adds up all cards
    if (count == 15) {
        score += 2;
    }
    //i took the code above from this website: https://www.webdeveloper.com/d/30996-cribbage-scoring/3
    //however, this code missed some combinations. Below are these combinations
    var count = handFif[1] + handFif[2] + handFif[3];//adds up the middle three cards
    if (count == 15) {
        score += 2;
    }
    var count = handFif[2] + handFif[3] + handFif[4];//adds up last three cards
    if (count == 15) {
        score += 2;
    }
    var count = handFif[1] + handFif[2] + handFif[4];//adds up second, third, and fifth cards
    if (count == 15) {
        score += 2;
    }
    var count = handFif[1] + handFif[3] + handFif[4];//adds up second, fourth, and fifth cards
    if (count == 15) {
        score += 2;
    }
    var count = handFif[1] + handFif[2] + handFif[3] + handFif[4];//adds up last four cards
    if (count == 15) {
        score += 2;
    }
    var count = handFif[0] + handFif[2] + handFif[3] + handFif[4];//adds up first, third, fourth, and fifth cards
    if (count == 15) {
        score += 2;
    }
    as++;
    final += score;
    fifteen = score;
    as = 0;
    bs = 1;
    cs = 2;
    ds = 3;
    score = 0;
    count = 0;
}
function score_pairs(one, two, three, four, five) {//scores the pionts gained from 'pairs'
//a pair is when two cards have the same value (eg. two 5's, two J's, etc.)
//a pair is worth two points
    var handPair = new Array(one, two, three, four, five);
    var pts = 0;
    for (var i = 0; i < handPair.length; i++) {//first card chosen
        for (var l = i + 1; l < handPair.length; l++) {//second card chosen
            if (handPair[i] == handPair[l]) {
                pts += 2;
            }
        }
    }
    final += pts;
    pair = pts;
    i = 0;
    l = i + 1;
    pts = 0;
    return false;
}

function score_runs(one, two, three, four, five) {//scores the points gained from 'runs'
//a run is when three or more cards are one value apart in ascending order (eg. 1,2,3,4,5; 9,10,J; etc.)
//a run is worth however many cards are in the run
    var handRun = new Array(one, two, three, four, five);
    var pts = 0;
    function sort(one, two, three, four, five) {//sorts cards in ascending order
        handRun.sort(function (a, b) { return a - b });
    }
    sort();
    if (((handRun[1] - handRun[0]) == 1) && ((handRun[2] - handRun[1]) == 1) && ((handRun[3] - handRun[2]) == 1) && ((handRun[4] - handRun[3]) == 1)) {//all five cards in the hand (eg. 1,2,3,4,5)
        pts += 5;
    }
    else if (((((handRun[2] - handRun[0]) == 1) && ((handRun[3] - handRun[2]) == 1) && ((handRun[4] - handRun[3]) == 1)) && (((handRun[2] - handRun[1]) == 1) && ((handRun[3] - handRun[2]) == 1) && ((handRun[4] - handRun[3]) == 1))) || ((((handRun[1] - handRun[0]) == 1) && ((handRun[3] - handRun[1]) == 1) && ((handRun[4] - handRun[3]) == 1)) && (((handRun[2] - handRun[0]) == 1) && ((handRun[3] - handRun[2]) == 1) && ((handRun[4] - handRun[3]) == 1))) || ((((handRun[1] - handRun[0]) == 1) && ((handRun[2] - handRun[1]) == 1) && ((handRun[4] - handRun[2]) == 1)) && ((((handRun[1] - handRun[0]) == 1) && ((handRun[3] - handRun[1]) == 1) && ((handRun[4] - handRun[3]) == 1)))) || ((((handRun[1] - handRun[0]) == 1) && ((handRun[2] - handRun[1]) == 1) && ((handRun[3] - handRun[2]) == 1)) && (((handRun[1] - handRun[0]) == 1) && ((handRun[2] - handRun[1]) == 1) && ((handRun[4] - handRun[2]) == 1)))) {//hands of double four runs (eg. 1,1,2,3,4)
        pts += 8;
    }
    else if ((((handRun[2] - handRun[0]) == 1) && ((handRun[3] - handRun[2]) == 1) && ((handRun[4] - handRun[3]) == 1)) || (((handRun[2] - handRun[1]) == 1) && ((handRun[3] - handRun[2]) == 1) && ((handRun[4] - handRun[3]) == 1)) || (((handRun[1] - handRun[0]) == 1) && ((handRun[3] - handRun[1]) == 1) && ((handRun[4] - handRun[3]) == 1)) || (((handRun[1] - handRun[0]) == 1) && ((handRun[2] - handRun[1]) == 1) && ((handRun[4] - handRun[2]) == 1)) || (((handRun[1] - handRun[0]) == 1) && ((handRun[2] - handRun[1]) == 1) && ((handRun[3] - handRun[2]) == 1))) {//combos of single four runs (eg. 5,6,7,8)
        pts += 4;
    }
    else if ((((handRun[1] - handRun[0]) == 1) && ((handRun[2] - handRun[1]) == 1) && ((handRun[3] - handRun[1]) == 1) && ((handRun[4] - handRun[1]) == 1)) || (((handRun[1] - handRun[0]) == 1) && ((handRun[4] - handRun[1]) == 1) && ((handRun[3] - handRun[0]) == 1) && ((handRun[2] - handRun[0]) == 1)) || (((handRun[3] - handRun[0]) == 1) && ((handRun[4] - handRun[3]) == 1) && ((handRun[3] - handRun[1]) == 1) && ((handRun[3] - handRun[2]) == 1))) {//hand of triple three runs (eg. 4,5,5,5,6)
        pts += 9;
    }
    else if ((((handRun[2] - handRun[0]) == 1) && ((handRun[2] - handRun[1]) == 1) && ((handRun[3] - handRun[0]) == 1) && ((handRun[3] - handRun[1]) == 1) && ((handRun[4] - handRun[2]) == 1) && ((handRun[4] - handRun[3]) == 1)) || (((handRun[2] - handRun[0]) == 1) && ((handRun[2] - handRun[1]) == 1) && ((handRun[3] - handRun[2]) == 1) && ((handRun[4] - handRun[2]) == 1)) || (((handRun[1] - handRun[0]) == 1) && ((handRun[2] - handRun[0]) == 1) && ((handRun[3] - handRun[1]) == 1) && ((handRun[3] - handRun[2]) == 1) && ((handRun[4] - handRun[1]) == 1) && ((handRun[4] - handRun[2]) == 1))) {//hand of double double three runs (eg. 7,7,8,8,9)
        pts += 12;
    }
    else if ((((handRun[2] - handRun[0]) == 1) && ((handRun[3] - handRun[2]) == 1) && ((handRun[2] - handRun[1]) == 1)) || (((handRun[1] - handRun[0]) == 1) && ((handRun[2] - handRun[0]) == 1) && ((handRun[3] - handRun[1]) == 1) && ((handRun[3] - handRun[2]) == 1)) || (((handRun[1] - handRun[0]) == 1) && ((handRun[2] - handRun[1]) == 1) && ((handRun[3] - handRun[1]) == 1)) || (((handRun[3] - handRun[1]) == 1) && ((handRun[3] - handRun[2]) == 1) && ((handRun[4] - handRun[3]) == 1)) || (((handRun[2] - handRun[1]) == 1) && ((handRun[3] - handRun[1]) == 1) && ((handRun[4] - handRun[3]) == 1) && ((handRun[4] - handRun[2]) == 1)) || (((handRun[2] - handRun[1]) == 1) && ((handRun[3] - handRun[2]) == 1) && ((handRun[4] - handRun[2]) == 1))) {//hand of double three runs (eg. 3,3,4,5)
        pts += 6;
    }
    else if ((((handRun[1] - handRun[0]) == 1) && ((handRun[2] - handRun[1]) == 1)) || (((handRun[2] - handRun[1]) == 1) && ((handRun[3] - handRun[2]) == 1)) || (((handRun[3] - handRun[2]) == 1) && ((handRun[4] - handRun[3]) == 1))) {//hand of single three run (eg. J,Q,K)
        pts += 3;
    }
    else {
        pts += 0;
    }
    //alert(pts);
    final += pts;
    run = pts;
    return false;
}
function score_nibs(one, two, three, four, five) {//scores the 'nibs' points
//nibs is when a player has a jack in their hand who's suit mathes the suit of the 'cut' card
//nibs scores one point
    var handNib = new Array(one, two, three, four, five);
    var pts = 0;
    function sort(one, two, three, four, five) {
        handNib.sort(function (a, b) { return a - b });//sorts the hand in ascending order
    }
    sort();
    suitCheck();//checks the suit of all of the cards in the hand, as well as whether there is a jack or not
    if (((nibSuit == twoSuit) || (nibSuit == threeSuit) || (nibSuit == fourSuit) || (nibSuit == fiveSuit)) && nibSuit == jackSuit) {//if the nibSuit is equal to the jackSuit, score a point
        if (jack == true) {
            pts += 1;
            jackSuit = 'nada';//don't let there be more than one hand that scores nibs
        }
        else {
            pts += 0;
        }
    }
    final += pts;
    nibs = pts;
    pts = 0;
    return false;
}
function score_flush(one, two, three, four, five) {//scores the 'flush' points
//a flush is when all of the cards are the same suit
//a flush scores four or five points
    var handFlush = new Array(one, two, three, four, five);
    var pts = 0;
    function sort(one, two, three, four, five) {
        handFlush.sort(function (a, b) { return a - b });//sort the hand in ascending order
    }
    sort();
    suitCheck();
    if (nibs != 0) {//saves the original suits from being changed by another function
        nibSuit = saveNib;
        jackSuit = nibSuit;
    }
    if ((nibSuit == twoSuit) && (twoSuit == threeSuit) && (threeSuit == fourSuit) && (fourSuit == fiveSuit) && (nibSuit == fiveSuit)) {//if all five cards are the same suit, score 5 points
        pts += 5;
    }
    else if (((twoSuit == threeSuit) && (threeSuit == fourSuit) && (fourSuit == fiveSuit) && (fiveSuit == twoSuit))) {//if only the four cards other than the cut card are the same suit, score 4 points
        pts += 4;
    }
    final += pts;
    flush = pts;
    pts = 0;
    return false;
}

var cut = false;
cutCheck();
var hand = new Array();//the hand
function compute() {//computes the amount of points scored
    if (click < 6) {
        suitCheck();
        //these scoring ways need J,Q,K to equal 11,12,13 respectively
        score_flush(hand[0], hand[1], hand[2], hand[3], hand[4]);
        score_nibs(hand[0], hand[1], hand[2], hand[3], hand[4]);
        score_pairs(hand[0], hand[1], hand[2], hand[3], hand[4]);
        score_runs(hand[0], hand[1], hand[2], hand[3], hand[4]);
        //these change J,Q,K to the value of 10
        if (hand[0] == 11) {
            hand[0] = 10;
        }
        if (hand[1] == 11) {
            hand[1] = 10;
        }
        if (hand[2] == 11) {
            hand[2] = 10;
        }
        if (hand[3] == 11) {
            hand[3] = 10;
        }
        if (hand[4] == 11) {
            hand[4] = 10;
        }
        if (hand[0] == 12) {
            hand[0] = 10;
        }
        if (hand[1] == 12) {
            hand[1] = 10;
        }
        if (hand[2] == 12) {
            hand[2] = 10;
        }
        if (hand[3] == 12) {
            hand[3] = 10;
        }
        if (hand[4] == 12) {
            hand[4] = 10;
        }
        if (hand[0] == 13) {
            hand[0] = 10;
        }
        if (hand[1] == 13) {
            hand[1] = 10;
        }
        if (hand[2] == 13) {
            hand[2] = 10;
        }
        if (hand[3] == 13) {
            hand[3] = 10;
        }
        if (hand[4] == 13) {
            hand[4] = 10;
        }
        //these scoring ways need J,Q,K to be 10
        score_fifteens(hand[0], hand[1], hand[2], hand[3], hand[4]);
    }
    else if (click < 11) {
        suitCheck();
        //these scoring ways need J,Q,K to equal 11,12,13 respectively
        score_flush(hand[5], hand[6], hand[7], hand[8], hand[9]);
        score_nibs(hand[5], hand[6], hand[7], hand[8], hand[9]);
        score_pairs(hand[5], hand[6], hand[7], hand[8], hand[9]);
        score_runs(hand[5], hand[6], hand[7], hand[8], hand[9]);
        //these change J,Q,K to the value of 10
        if (hand[5] == 11) {
            hand[5] = 10;
        }
        if (hand[6] == 11) {
            hand[6] = 10;
        }
        if (hand[7] == 11) {
            hand[7] = 10;
        }
        if (hand[8] == 11) {
            hand[8] = 10;
        }
        if (hand[9] == 11) {
            hand[9] = 10;
        }
        if (hand[5] == 12) {
            hand[5] = 10;
        }
        if (hand[6] == 12) {
            hand[6] = 10;
        }
        if (hand[7] == 12) {
            hand[7] = 10;
        }
        if (hand[8] == 12) {
            hand[8] = 10;
        }
        if (hand[9] == 12) {
            hand[9] = 10;
        }
        if (hand[5] == 13) {
            hand[5] = 10;
        }
        if (hand[6] == 13) {
            hand[6] = 10;
        }
        if (hand[7] == 13) {
            hand[7] = 10;
        }
        if (hand[8] == 13) {
            hand[8] = 10;
        }
        if (hand[9] == 13) {
            hand[9] = 10;
        }
        //these scoring ways need J,Q,K to be 10
        score_fifteens(hand[5], hand[6], hand[7], hand[8], hand[9]);
    }
    else if (click < 16) {
        suitCheck();
        //these scoring ways need J,Q,K to equal 11,12,13 respectively
        score_flush(hand[10], hand[11], hand[12], hand[13], hand[14]);
        score_nibs(hand[10], hand[11], hand[12], hand[13], hand[14]);
        score_pairs(hand[10], hand[11], hand[12], hand[13], hand[14]);
        score_runs(hand[10], hand[11], hand[12], hand[13], hand[14]);
        //these change J,Q,K to the value of 10
        if (hand[10] == 11) {
            hand[10] = 10;
        }
        if (hand[11] == 11) {
            hand[11] = 10;
        }
        if (hand[12] == 11) {
            hand[12] = 10;
        }
        if (hand[13] == 11) {
            hand[13] = 10;
        }
        if (hand[14] == 11) {
            hand[14] = 10;
        }
        if (hand[10] == 12) {
            hand[10] = 10;
        }
        if (hand[11] == 12) {
            hand[11] = 10;
        }
        if (hand[12] == 12) {
            hand[12] = 10;
        }
        if (hand[13] == 12) {
            hand[13] = 10;
        }
        if (hand[14] == 12) {
            hand[14] = 10;
        }
        if (hand[10] == 13) {
            hand[10] = 10;
        }
        if (hand[11] == 13) {
            hand[11] = 10;
        }
        if (hand[12] == 13) {
            hand[12] = 10;
        }
        if (hand[13] == 13) {
            hand[13] = 10;
        }
        if (hand[14] == 13) {
            hand[14] = 10;
        }
        //these scoring ways need J,Q,K to be 10
        score_fifteens(hand[10], hand[11], hand[12], hand[13], hand[14]);
    }
    document.getElementById('score2').innerHTML = + final + ' points!';
    if (click < 6 && final!= 0) {//scores player one's hands
        finalMove = final;
        moveRightRed();
        final = 0;
    }
    else if (click < 11 && final!= 0) {//scores player two's hand
        finalMove = final;
        moveRightBlue();
        final = 0;
    }
    else if (click < 16 && final!= 0) {//scores the crib for player one
        finalMove = final;
        moveRightRed();
        final = 0;
    }
    cutCheck();
}
function one() {//if the card clicked is an ace (one)
    cutCheck();//checks to see if it is the cut
    if (click == 1) {
        hand[0] = 1;//first hand slot (cut) for player one
    }
    else if (click == 2) {
        hand[1] = 1;//second hand slot for player one
    }
    else if (click == 3) {
        hand[2] = 1;//third hand slot for player one
    }
    else if (click == 4) {
        hand[3] = 1;//fourth hand slot for player one
    }
    else if (click == 5) {
        hand[4] = 1;//fifth hand slot for player one
        compute(one, two, three, four, five);//final click happened, so we should count the score now
    }
    else if (click == 6) {//first hand slot (cut) for player two
        hand[5] = 1;
    }
    else if (click == 7) {//second hand slot for player two
        hand[6] = 1;
    }
    else if (click == 8) {//third hand slot for player two
        hand[7] = 1;
    }
    else if (click == 9) {//fourth hand slot for player two
        hand[8] = 1;
    }
    else if (click == 10) {//fifth hand slot for player two
        hand[9] = 1;
        compute(one, two, three, four, five);//final click happened, so we should count the score now
    }
    else if (click == 11) {//first hand slot (cut) for the crib
        hand[10] = 1;
    }
    else if (click == 12) {//second hand slot for the crib
        hand[11] = 1;
    }
    else if (click == 13) {//third hand slot for the crib
        hand[12] = 1;
    }
    else if (click == 14) {//fourth hand slot for the crib
        hand[13] = 1;
    }
    else if (click == 15) {//fifth hand slot for the crib
        hand[14] = 1;
        compute(one, two, three, four, five);//final click happened, so we should count the score now
    }
    suitCheck();//what is the suit?
}
function two() {//if the card clicked is a two
    //all of these are the same as one(), so check there for what these do
    cutCheck();
    if (click == 1) {
        hand[0] = 2;
    }
    else if (click == 2) {
        hand[1] = 2;
    }
    else if (click == 3) {
        hand[2] = 2;
    }
    else if (click == 4) {
        hand[3] = 2;
    }
    else if (click == 5) {
        hand[4] = 2;
        compute(one, two, three, four, five);
    }
    else if (click == 6) {
        hand[5] = 2;
    }
    else if (click == 7) {
        hand[6] = 2;
    }
    else if (click == 8) {
        hand[7] = 2;
    }
    else if (click == 9) {
        hand[8] = 2;
    }
    else if (click == 10) {
        hand[9] = 2;
        compute(one, two, three, four, five);
    }
    else if (click == 11) {
        hand[10] = 2;
    }
    else if (click == 12) {
        hand[11] = 2;
    }
    else if (click == 13) {
        hand[12] = 2;
    }
    else if (click == 14) {
        hand[13] = 2;
    }
    else if (click == 15) {
        hand[14] = 2;
        compute(one, two, three, four, five);
    }
    suitCheck();
}
function three() {//if the card clicked is a three
    //all of these are the same as one(), so check there for what these do
    cutCheck();
    if (click == 1) {
        hand[0] = 3;
    }
    else if (click == 2) {
        hand[1] = 3;
    }
    else if (click == 3) {
        hand[2] = 3;
    }
    else if (click == 4) {
        hand[3] = 3;
    }
    else if (click == 5) {
        hand[4] = 3;
        compute(one, two, three, four, five);
    }
    else if (click == 6) {
        hand[5] = 3;
    }
    else if (click == 7) {
        hand[6] = 3;
    }
    else if (click == 8) {
        hand[7] = 3;
    }
    else if (click == 9) {
        hand[8] = 3;
    }
    else if (click == 10) {
        hand[9] = 3;
        compute(one, two, three, four, five);
    }
    else if (click == 11) {
        hand[10] = 3;
    }
    else if (click == 12) {
        hand[11] = 3;
    }
    else if (click == 13) {
        hand[12] = 3;
    }
    else if (click == 14) {
        hand[13] = 3;
    }
    else if (click == 15) {
        hand[14] = 3;
        compute(one, two, three, four, five);
    }
    suitCheck();
}
function four() {//if the card clicked is a four
    //all of these are the same as one(), so check there for what these do
    cutCheck();
    if (click == 1) {
        hand[0] = 4;
    }
    else if (click == 2) {
        hand[1] = 4;
    }
    else if (click == 3) {
        hand[2] = 4;
    }
    else if (click == 4) {
        hand[3] = 4;
    }
    else if (click == 5) {
        hand[4] = 4;
        compute(one, two, three, four, five);
    }
    else if (click == 6) {
        hand[5] = 4;
    }
    else if (click == 7) {
        hand[6] = 4;
    }
    else if (click == 8) {
        hand[7] = 4;
    }
    else if (click == 9) {
        hand[8] = 4;
    }
    else if (click == 10) {
        hand[9] = 4;
        compute(one, two, three, four, five);
    }
    else if (click == 11) {
        hand[10] = 4;
    }
    else if (click == 12) {
        hand[11] = 4;
    }
    else if (click == 13) {
        hand[12] = 4;
    }
    else if (click == 14) {
        hand[13] = 4;
    }
    else if (click == 15) {
        hand[14] = 4;
        compute(one, two, three, four, five);
    }
    suitCheck();
}
function five() {//if the card clicked is a five
    //all of these are the same as one(), so check there for what these do
    cutCheck();
    if (click == 1) {
        hand[0] = 5;
    }
    else if (click == 2) {
        hand[1] = 5;
    }
    else if (click == 3) {
        hand[2] = 5;
    }
    else if (click == 4) {
        hand[3] = 5;
    }
    else if (click == 5) {
        hand[4] = 5;
        compute(one, two, three, four, five);
    }
    else if (click == 6) {
        hand[5] = 5;
    }
    else if (click == 7) {
        hand[6] = 5;
    }
    else if (click == 8) {
        hand[7] = 5;
    }
    else if (click == 9) {
        hand[8] = 5;
    }
    else if (click == 10) {
        hand[9] = 5;
        compute(one, two, three, four, five);
    }
    else if (click == 11) {
        hand[10] = 5;
    }
    else if (click == 12) {
        hand[11] = 5;
    }
    else if (click == 13) {
        hand[12] = 5;
    }
    else if (click == 14) {
        hand[13] = 5;
    }
    else if (click == 15) {
        hand[14] = 5;
        compute(one, two, three, four, five);
    }
    suitCheck();
}
function six() {//if the card clicked is a six
    //all of these are the same as one(), so check there for what these do
    cutCheck();
    if (click == 1) {
        hand[0] = 6;
    }
    else if (click == 2) {
        hand[1] = 6;
    }
    else if (click == 3) {
        hand[2] = 6;
    }
    else if (click == 4) {
        hand[3] = 6;
    }
    else if (click == 5) {
        hand[4] = 6;
        compute(one, two, three, four, five);
    }
    else if (click == 6) {
        hand[5] = 6;
    }
    else if (click == 7) {
        hand[6] = 6;
    }
    else if (click == 8) {
        hand[7] = 6;
    }
    else if (click == 9) {
        hand[8] = 6;
    }
    else if (click == 10) {
        hand[9] = 6;
        compute(one, two, three, four, five);
    }
    else if (click == 11) {
        hand[10] = 6;
    }
    else if (click == 12) {
        hand[11] = 6;
    }
    else if (click == 13) {
        hand[12] = 6;
    }
    else if (click == 14) {
        hand[13] = 6;
    }
    else if (click == 15) {
        hand[14] = 6;
        compute(one, two, three, four, five);
    }
    suitCheck();
}
function seven() {//if the card clicked is a seven
    //all of these are the same as one(), so check there for what these do
    cutCheck();
    if (click == 1) {
        hand[0] = 7;
    }
    else if (click == 2) {
        hand[1] = 7;
    }
    else if (click == 3) {
        hand[2] = 7;
    }
    else if (click == 4) {
        hand[3] = 7;
    }
    else if (click == 5) {
        hand[4] = 7;
        compute(one, two, three, four, five);
    }
    else if (click == 6) {
        hand[5] = 7;
    }
    else if (click == 7) {
        hand[6] = 7;
    }
    else if (click == 8) {
        hand[7] = 7;
    }
    else if (click == 9) {
        hand[8] = 7;
    }
    else if (click == 10) {
        hand[9] = 7;
        compute(one, two, three, four, five);
    }
    else if (click == 11) {
        hand[10] = 7;
    }
    else if (click == 12) {
        hand[11] = 7;
    }
    else if (click == 13) {
        hand[12] = 7;
    }
    else if (click == 14) {
        hand[13] = 7;
    }
    else if (click == 15) {
        hand[14] = 7;
        compute(one, two, three, four, five);
    }
    suitCheck();
}
function eight() {//if the card clicked is a eight
    //all of these are the same as one(), so check there for what these do
    cutCheck();
    if (click == 1) {
        hand[0] = 8;
    }
    else if (click == 2) {
        hand[1] = 8;
    }
    else if (click == 3) {
        hand[2] = 8;
    }
    else if (click == 4) {
        hand[3] = 8;
    }
    else if (click == 5) {
        hand[4] = 8;
        compute(one, two, three, four, five);
    }
    else if (click == 6) {
        hand[5] = 8;
    }
    else if (click == 7) {
        hand[6] = 8;
    }
    else if (click == 8) {
        hand[7] = 8;
    }
    else if (click == 9) {
        hand[8] = 8;
    }
    else if (click == 10) {
        hand[9] = 8;
        compute(one, two, three, four, five);
    }
    else if (click == 11) {
        hand[10] = 8;
    }
    else if (click == 12) {
        hand[11] = 8;
    }
    else if (click == 13) {
        hand[12] = 8;
    }
    else if (click == 14) {
        hand[13] = 8;
    }
    else if (click == 15) {
        hand[14] = 8;
        compute(one, two, three, four, five);
    }
    suitCheck();
}
function nine() {//if the card clicked is a nine
    //all of these are the same as one(), so check there for what these do
    cutCheck();
    if (click == 1) {
        hand[0] = 9;
    }
    else if (click == 2) {
        hand[1] = 9;
    }
    else if (click == 3) {
        hand[2] = 9;
    }
    else if (click == 4) {
        hand[3] = 9;
    }
    else if (click == 5) {
        hand[4] = 9;
        compute(one, two, three, four, five);
    }
    else if (click == 6) {
        hand[5] = 9;
    }
    else if (click == 7) {
        hand[6] = 9;
    }
    else if (click == 8) {
        hand[7] = 9;
    }
    else if (click == 9) {
        hand[8] = 9;
    }
    else if (click == 10) {
        hand[9] = 9;
        compute(one, two, three, four, five);
    }
    else if (click == 11) {
        hand[10] = 9;
    }
    else if (click == 12) {
        hand[11] = 9 ;
    }
    else if (click == 13) {
        hand[12] = 9;
    }
    else if (click == 14) {
        hand[13] = 9;
    }
    else if (click == 15) {
        hand[14] = 9;
        compute(one, two, three, four, five);
    }
    suitCheck();
}
function ten() {//if the card clicked is a ten
    //all of these are the same as one(), so check there for what these do
    cutCheck();
    if (click == 1) {
        hand[0] = 10;
    }
    else if (click == 2) {
        hand[1] = 10;
    }
    else if (click == 3) {
        hand[2] = 10;
    }
    else if (click == 4) {
        hand[3] = 10;
    }
    else if (click == 5) {
        hand[4] = 10;
        compute(one, two, three, four, five);
    }
    else if (click == 6) {
        hand[5] = 10;
    }
    else if (click == 7) {
        hand[6] = 10;
    }
    else if (click == 8) {
        hand[7] = 10;
    }
    else if (click == 9) {
        hand[8] = 10;
    }
    else if (click == 10) {
        hand[9] = 10;
        compute(one, two, three, four, five);
    }
    else if (click == 11) {
        hand[10] = 10;
    }
    else if (click == 12) {
        hand[11] = 10;
    }
    else if (click == 13) {
        hand[12] = 10;
    }
    else if (click == 14) {
        hand[13] = 10;
    }
    else if (click == 15) {
        hand[14] = 10;
        compute(one, two, three, four, five);
    }
    suitCheck();
}
function eleven() {//if the card clicked is a jack
    //all of these are the same as one(), so check there for what these do
    cutCheck();
    if (click == 1) {
        hand[0] = 11;
    }
    else if (click == 2) {
        hand[1] = 11;
    }
    else if (click == 3) {
        hand[2] = 11;
    }
    else if (click == 4) {
        hand[3] = 11;
    }
    else if (click == 5) {
        hand[4] = 11;
        compute(one, two, three, four, five);
    }
    else if (click == 6) {
        hand[5] = 11;
    }
    else if (click == 7) {
        hand[6] = 11;
    }
    else if (click == 8) {
        hand[7] = 11;
    }
    else if (click == 9) {
        hand[8] = 11;
    }
    else if (click == 10) {
        hand[9] = 11;
        compute(one, two, three, four, five);
    }
    else if (click == 11) {
        hand[10] = 11;
    }
    else if (click == 12) {
        hand[11] = 11;
    }
    else if (click == 13) {
        hand[12] = 11;
    }
    else if (click == 14) {
        hand[13] = 11;
    }
    else if (click == 15) {
        hand[14] = 11;
        compute(one, two, three, four, five);
    }
    suitCheck();
}
function twelve() {//if the card clicked is a queen
    //all of these are the same as one(), so check there for what these do
    cutCheck();
    if (click == 1) {
        hand[0] = 12;
    }
    else if (click == 2) {
        hand[1] = 12;
    }
    else if (click == 3) {
        hand[2] = 12;
    }
    else if (click == 4) {
        hand[3] = 12;
    }
    else if (click == 5) {
        hand[4] = 12;
        compute(one, two, three, four, five);
    }
    else if (click == 6) {
        hand[5] = 12;
    }
    else if (click == 7) {
        hand[6] = 12;
    }
    else if (click == 8) {
        hand[7] = 12;
    }
    else if (click == 9) {
        hand[8] = 12;
    }
    else if (click == 10) {
        hand[9] = 12;
        compute(one, two, three, four, five);
    }
    else if (click == 11) {
        hand[10] = 12;
    }
    else if (click == 12) {
        hand[11] = 12;
    }
    else if (click == 13) {
        hand[12] = 12;
    }
    else if (click == 14) {
        hand[13] = 12;
    }
    else if (click == 15) {
        hand[14] = 12;
        compute(one, two, three, four, five);
    }
    suitCheck();
}
function thirteen() {//if the card clicked is a king
    //all of these are the same as one(), so check there for what these do
    cutCheck();
    if (click == 1) {
        hand[0] = 13;
    }
    else if (click == 2) {
        hand[1] = 13;
    }
    else if (click == 3) {
        hand[2] = 13;
    }
    else if (click == 4) {
        hand[3] = 13;
    }
    else if (click == 5) {
        hand[4] = 13;
        compute(one, two, three, four, five);
    }
    else if (click == 6) {
        hand[5] = 13;
    }
    else if (click == 7) {
        hand[6] = 13;
    }
    else if (click == 8) {
        hand[7] = 13;
    }
    else if (click == 9) {
        hand[8] = 13;
    }
    else if (click == 10) {
        hand[9] = 13;
        compute(one, two, three, four, five);
    }
    else if (click == 11) {
        hand[10] = 13;
    }
    else if (click == 12) {
        hand[11] = 13;
    }
    else if (click == 13) {
        hand[12] = 13;
    }
    else if (click == 14) {
        hand[13] = 13;
    }
    else if (click == 15) {
        hand[14] = 13;
        compute(one, two, three, four, five);
    }
    suitCheck();
}
var click = 0;
function whichNumberPlayerOne() {//this confirms the values of each of the cards in player one's hand
//this starts with the cut card
    if (cutValue > 0 && cutValue < 14) {
        click++;
        console.log("number of clicks: " + click);
        suit = "diamond";
        if (cutValue == 1) {
            one();
        }
        else if (cutValue == 2) {
            two();
        }
        else if (cutValue == 3) {
            three();
        }
        else if (cutValue == 4) {
            four();
        }
        else if (cutValue == 5) {
            five();
        }
        else if (cutValue == 6) {
            six();
        }
        else if (cutValue == 7) {
            seven();
        }
        else if (cutValue == 8) {
            eight();
        }
        else if (cutValue == 9) {
            nine();
        }
        else if (cutValue == 10) {
            ten();
        }
        else if (cutValue == 11) {
            eleven();
        }
        else if (cutValue == 12) {
            twelve();
        }
        else if (cutValue == 13) {
            thirteen();
        }
    }
    else if (cutValue > 13 && cutValue < 27) {
        click++;
        console.log("number of clicks: " + click);
        suit = "club";
        if (cutValue == 14) {
            one();
        }
        else if (cutValue == 15) {
            two();
        }
        else if (cutValue == 16) {
            three();
        }
        else if (cutValue == 17) {
            four();
        }
        else if (cutValue == 18) {
            five();
        }
        else if (cutValue == 19) {
            six();
        }
        else if (cutValue == 20) {
            seven();
        }
        else if (cutValue == 21) {
            eight();
        }
        else if (cutValue == 22) {
            nine();
        }
        else if (cutValue == 23) {
            ten();
        }
        else if (cutValue == 24) {
            eleven();
        }
        else if (cutValue == 25) {
            twelve();
        }
        else if (cutValue == 26) {
            thirteen();
        }
    }
    else if (cutValue > 26 && cutValue < 40) {
        click++;
        console.log("number of clicks: " + click);
        suit = "heart";
        if (cutValue == 27) {
            one();
        }
        else if (cutValue == 28) {
            two();
        }
        else if (cutValue == 29) {
            three();
        }
        else if (cutValue == 30) {
            four();
        }
        else if (cutValue == 31) {
            five();
        }
        else if (cutValue == 32) {
            six();
        }
        else if (cutValue == 33) {
            seven();
        }
        else if (cutValue == 34) {
            eight();
        }
        else if (cutValue == 35) {
            nine();
        }
        else if (cutValue == 36) {
            ten();
        }
        else if (cutValue == 37) {
            eleven();
        }
        else if (cutValue == 38) {
            twelve();
        }
        else if (cutValue == 39) {
            thirteen();
        }
    }
    else if (cutValue > 39 && cutValue < 53) {
        click++;
        console.log("number of clicks: " + click);
        suit = "spade";
        if (cutValue == 40) {
            one();
        }
        else if (cutValue == 41) {
            two();
        }
        else if (cutValue == 42) {
            three();
        }
        else if (cutValue == 43) {
            four();
        }
        else if (cutValue == 44) {
            five();
        }
        else if (cutValue == 45) {
            six();
        }
        else if (cutValue == 46) {
            seven();
        }
        else if (cutValue == 47) {
            eight();
        }
        else if (cutValue == 48) {
            nine();
        }
        else if (cutValue == 49) {
            ten();
        }
        else if (cutValue == 50) {
            eleven();
        }
        else if (cutValue == 51) {
            twelve();
        }
        else if (cutValue == 52) {
            thirteen();
        }
    }
    //first card in player one's hand
    if (p1nc1 > 0 && p1nc1 < 14) {
        click++;
        console.log("number of clicks: " + click);
        suit = "diamond";
        if (p1nc1 == 1) {
            one();
        }
        else if (p1nc1 == 2) {
            two();
        }
        else if (p1nc1 == 3) {
            three();
        }
        else if (p1nc1 == 4) {
            four();
        }
        else if (p1nc1 == 5) {
            five();
        }
        else if (p1nc1 == 6) {
            six();
        }
        else if (p1nc1 == 7) {
            seven();
        }
        else if (p1nc1 == 8) {
            eight();
        }
        else if (p1nc1 == 9) {
            nine();
        }
        else if (p1nc1 == 10) {
            ten();
        }
        else if (p1nc1 == 11) {
            eleven();
        }
        else if (p1nc1 == 12) {
            twelve();
        }
        else if (p1nc1 == 13) {
            thirteen();
        }
    }
    else if (p1nc1 > 13 && p1nc1 < 27) {
        click++;
        console.log("number of clicks: " + click);
        suit = "club";
        if (p1nc1 == 14) {
            one();
        }
        else if (p1nc1 == 15) {
            two();
        }
        else if (p1nc1 == 16) {
            three();
        }
        else if (p1nc1 == 17) {
            four();
        }
        else if (p1nc1 == 18) {
            five();
        }
        else if (p1nc1 == 19) {
            six();
        }
        else if (p1nc1 == 20) {
            seven();
        }
        else if (p1nc1 == 21) {
            eight();
        }
        else if (p1nc1 == 22) {
            nine();
        }
        else if (p1nc1 == 23) {
            ten();
        }
        else if (p1nc1 == 24) {
            eleven();
        }
        else if (p1nc1 == 25) {
            twelve();
        }
        else if (p1nc1 == 26) {
            thirteen();
        }
    }
    else if (p1nc1 > 26 && p1nc1 < 40) {
        click++;
        console.log("number of clicks: " + click);
        suit = "heart";
        if (p1nc1 == 27) {
            one();
        }
        else if (p1nc1 == 28) {
            two();
        }
        else if (p1nc1 == 29) {
            three();
        }
        else if (p1nc1 == 30) {
            four();
        }
        else if (p1nc1 == 31) {
            five();
        }
        else if (p1nc1 == 32) {
            six();
        }
        else if (p1nc1 == 33) {
            seven();
        }
        else if (p1nc1 == 34) {
            eight();
        }
        else if (p1nc1 == 35) {
            nine();
        }
        else if (p1nc1 == 36) {
            ten();
        }
        else if (p1nc1 == 37) {
            eleven();
        }
        else if (p1nc1 == 38) {
            twelve();
        }
        else if (p1nc1 == 39) {
            thirteen();
        }
    }
    else if (p1nc1 > 39 && p1nc1 < 53) {
        click++;
        console.log("number of clicks: " + click);
        suit = "spade";
        if (p1nc1 == 40) {
            one();
        }
        else if (p1nc1 == 41) {
            two();
        }
        else if (p1nc1 == 42) {
            three();
        }
        else if (p1nc1 == 43) {
            four();
        }
        else if (p1nc1 == 44) {
            five();
        }
        else if (p1nc1 == 45) {
            six();
        }
        else if (p1nc1 == 46) {
            seven();
        }
        else if (p1nc1 == 47) {
            eight();
        }
        else if (p1nc1 == 48) {
            nine();
        }
        else if (p1nc1 == 49) {
            ten();
        }
        else if (p1nc1 == 50) {
            eleven();
        }
        else if (p1nc1 == 51) {
            twelve();
        }
        else if (p1nc1 == 52) {
            thirteen();
        }
    }
    //second card in player one's hand
    if (p1nc2 > 0 && p1nc2 < 14) {
        click++;
        console.log("number of clicks: " + click);
        suit = "diamond";
        if (p1nc2 == 1) {
            one();
        }
        else if (p1nc2 == 2) {
            two();
        }
        else if (p1nc2 == 3) {
            three();
        }
        else if (p1nc2 == 4) {
            four();
        }
        else if (p1nc2 == 5) {
            five();
        }
        else if (p1nc2 == 6) {
            six();
        }
        else if (p1nc2 == 7) {
            seven();
        }
        else if (p1nc2 == 8) {
            eight();
        }
        else if (p1nc2 == 9) {
            nine();
        }
        else if (p1nc2 == 10) {
            ten();
        }
        else if (p1nc2 == 11) {
            eleven();
        }
        else if (p1nc2 == 12) {
            twelve();
        }
        else if (p1nc2 == 13) {
            thirteen();
        }
    }
    else if (p1nc2 > 13 && p1nc2 < 27) {
        click++;
        console.log("number of clicks: " + click);
        suit = "club";
        if (p1nc2 == 14) {
            one();
        }
        else if (p1nc2 == 15) {
            two();
        }
        else if (p1nc2 == 16) {
            three();
        }
        else if (p1nc2 == 17) {
            four();
        }
        else if (p1nc2 == 18) {
            five();
        }
        else if (p1nc2 == 19) {
            six();
        }
        else if (p1nc2 == 20) {
            seven();
        }
        else if (p1nc2 == 21) {
            eight();
        }
        else if (p1nc2 == 22) {
            nine();
        }
        else if (p1nc2 == 23) {
            ten();
        }
        else if (p1nc2 == 24) {
            eleven();
        }
        else if (p1nc2 == 25) {
            twelve();
        }
        else if (p1nc2 == 26) {
            thirteen();
        }
    }
    else if (p1nc2 > 26 && p1nc2 < 40) {
        click++;
        console.log("number of clicks: " + click);
        suit = "heart";
        if (p1nc2 == 27) {
            one();
        }
        else if (p1nc2 == 28) {
            two();
        }
        else if (p1nc2 == 29) {
            three();
        }
        else if (p1nc2 == 30) {
            four();
        }
        else if (p1nc2 == 31) {
            five();
        }
        else if (p1nc2 == 32) {
            six();
        }
        else if (p1nc2 == 33) {
            seven();
        }
        else if (p1nc2 == 34) {
            eight();
        }
        else if (p1nc2 == 35) {
            nine();
        }
        else if (p1nc2 == 36) {
            ten();
        }
        else if (p1nc2 == 37) {
            eleven();
        }
        else if (p1nc2 == 38) {
            twelve();
        }
        else if (p1nc2 == 39) {
            thirteen();
        }
    }
    else if (p1nc2 > 39 && p1nc2 < 53) {
        click++;
        console.log("number of clicks: " + click);
        suit = "spade";
        if (p1nc2 == 40) {
            one();
        }
        else if (p1nc2 == 41) {
            two();
        }
        else if (p1nc2 == 42) {
            three();
        }
        else if (p1nc2 == 43) {
            four();
        }
        else if (p1nc2 == 44) {
            five();
        }
        else if (p1nc2 == 45) {
            six();
        }
        else if (p1nc2 == 46) {
            seven();
        }
        else if (p1nc2 == 47) {
            eight();
        }
        else if (p1nc2 == 48) {
            nine();
        }
        else if (p1nc2 == 49) {
            ten();
        }
        else if (p1nc2 == 50) {
            eleven();
        }
        else if (p1nc2 == 51) {
            twelve();
        }
        else if (p1nc2 == 52) {
            thirteen();
        }
    }
    //third card in player one's hand
    if (p1nc3 > 0 && p1nc3 < 14) {
        click++;
        console.log("number of clicks: " + click);
        suit = "diamond";
        if (p1nc3 == 1) {
            one();
        }
        else if (p1nc3 == 2) {
            two();
        }
        else if (p1nc3 == 3) {
            three();
        }
        else if (p1nc3 == 4) {
            four();
        }
        else if (p1nc3 == 5) {
            five();
        }
        else if (p1nc3 == 6) {
            six();
        }
        else if (p1nc3 == 7) {
            seven();
        }
        else if (p1nc3 == 8) {
            eight();
        }
        else if (p1nc3 == 9) {
            nine();
        }
        else if (p1nc3 == 10) {
            ten();
        }
        else if (p1nc3 == 11) {
            eleven();
        }
        else if (p1nc3 == 12) {
            twelve();
        }
        else if (p1nc3 == 13) {
            thirteen();
        }
    }
    else if (p1nc3 > 13 && p1nc3 < 27) {
        click++;
        console.log("number of clicks: " + click);
        suit = "club";
        if (p1nc3 == 14) {
            one();
        }
        else if (p1nc3 == 15) {
            two();
        }
        else if (p1nc3 == 16) {
            three();
        }
        else if (p1nc3 == 17) {
            four();
        }
        else if (p1nc3 == 18) {
            five();
        }
        else if (p1nc3 == 19) {
            six();
        }
        else if (p1nc3 == 20) {
            seven();
        }
        else if (p1nc3 == 21) {
            eight();
        }
        else if (p1nc3 == 22) {
            nine();
        }
        else if (p1nc3 == 23) {
            ten();
        }
        else if (p1nc3 == 24) {
            eleven();
        }
        else if (p1nc3 == 25) {
            twelve();
        }
        else if (p1nc3 == 26) {
            thirteen();
        }
    }
    else if (p1nc3 > 26 && p1nc3 < 40) {
        click++;
        console.log("number of clicks: " + click);
        suit = "heart";
        if (p1nc3 == 27) {
            one();
        }
        else if (p1nc3 == 28) {
            two();
        }
        else if (p1nc3 == 29) {
            three();
        }
        else if (p1nc3 == 30) {
            four();
        }
        else if (p1nc3 == 31) {
            five();
        }
        else if (p1nc3 == 32) {
            six();
        }
        else if (p1nc3 == 33) {
            seven();
        }
        else if (p1nc3 == 34) {
            eight();
        }
        else if (p1nc3 == 35) {
            nine();
        }
        else if (p1nc3 == 36) {
            ten();
        }
        else if (p1nc3 == 37) {
            eleven();
        }
        else if (p1nc3 == 38) {
            twelve();
        }
        else if (p1nc3 == 39) {
            thirteen();
        }
    }
    else if (p1nc3 > 39 && p1nc3 < 53) {
        click++;
        console.log("number of clicks: " + click);
        suit = "spade";
        if (p1nc3 == 40) {
            one();
        }
        else if (p1nc3 == 41) {
            two();
        }
        else if (p1nc3 == 42) {
            three();
        }
        else if (p1nc3 == 43) {
            four();
        }
        else if (p1nc3 == 44) {
            five();
        }
        else if (p1nc3 == 45) {
            six();
        }
        else if (p1nc3 == 46) {
            seven();
        }
        else if (p1nc3 == 47) {
            eight();
        }
        else if (p1nc3 == 48) {
            nine();
        }
        else if (p1nc3 == 49) {
            ten();
        }
        else if (p1nc3 == 50) {
            eleven();
        }
        else if (p1nc3 == 51) {
            twelve();
        }
        else if (p1nc3 == 52) {
            thirteen();
        }
    }
    //fourth card in player one's hand
    if (p1nc4 > 0 && p1nc4 < 14) {
        click++;
        console.log("number of clicks: " + click);
        suit = "diamond";
        if (p1nc4 == 1) {
            one();
        }
        else if (p1nc4 == 2) {
            two();
        }
        else if (p1nc4 == 3) {
            three();
        }
        else if (p1nc4 == 4) {
            four();
        }
        else if (p1nc4 == 5) {
            five();
        }
        else if (p1nc4 == 6) {
            six();
        }
        else if (p1nc4 == 7) {
            seven();
        }
        else if (p1nc4 == 8) {
            eight();
        }
        else if (p1nc4 == 9) {
            nine();
        }
        else if (p1nc4 == 10) {
            ten();
        }
        else if (p1nc4 == 11) {
            eleven();
        }
        else if (p1nc4 == 12) {
            twelve();
        }
        else if (p1nc4 == 13) {
            thirteen();
        }
    }
    else if (p1nc4 > 13 && p1nc4 < 27) {
        click++;
        console.log("number of clicks: " + click);
        suit = "club";
        if (p1nc4 == 14) {
            one();
        }
        else if (p1nc4 == 15) {
            two();
        }
        else if (p1nc4 == 16) {
            three();
        }
        else if (p1nc4 == 17) {
            four();
        }
        else if (p1nc4 == 18) {
            five();
        }
        else if (p1nc4 == 19) {
            six();
        }
        else if (p1nc4 == 20) {
            seven();
        }
        else if (p1nc4 == 21) {
            eight();
        }
        else if (p1nc4 == 22) {
            nine();
        }
        else if (p1nc4 == 23) {
            ten();
        }
        else if (p1nc4 == 24) {
            eleven();
        }
        else if (p1nc4 == 25) {
            twelve();
        }
        else if (p1nc4 == 26) {
            thirteen();
        }
    }
    else if (p1nc4 > 26 && p1nc4 < 40) {
        click++;
        console.log("number of clicks: " + click);
        suit = "heart";
        if (p1nc4 == 27) {
            one();
        }
        else if (p1nc4 == 28) {
            two();
        }
        else if (p1nc4 == 29) {
            three();
        }
        else if (p1nc4 == 30) {
            four();
        }
        else if (p1nc4 == 31) {
            five();
        }
        else if (p1nc4 == 32) {
            six();
        }
        else if (p1nc4 == 33) {
            seven();
        }
        else if (p1nc4 == 34) {
            eight();
        }
        else if (p1nc4 == 35) {
            nine();
        }
        else if (p1nc4 == 36) {
            ten();
        }
        else if (p1nc4 == 37) {
            eleven();
        }
        else if (p1nc4 == 38) {
            twelve();
        }
        else if (p1nc4 == 39) {
            thirteen();
        }
    }
    else if (p1nc4 > 39 && p1nc4 < 53) {
        click++;
        console.log("number of clicks: " + click);
        suit = "spade";
        if (p1nc4 == 40) {
            one();
        }
        else if (p1nc4 == 41) {
            two();
        }
        else if (p1nc4 == 42) {
            three();
        }
        else if (p1nc4 == 43) {
            four();
        }
        else if (p1nc4 == 44) {
            five();
        }
        else if (p1nc4 == 45) {
            six();
        }
        else if (p1nc4 == 46) {
            seven();
        }
        else if (p1nc4 == 47) {
            eight();
        }
        else if (p1nc4 == 48) {
            nine();
        }
        else if (p1nc4 == 49) {
            ten();
        }
        else if (p1nc4 == 50) {
            eleven();
        }
        else if (p1nc4 == 51) {
            twelve();
        }
        else if (p1nc4 == 52) {
            thirteen();
        }
    }
}

function whichNumberPlayerTwo() {//this confirms the values of each of the cards in player two's hand
//this starts with the cut card
    if (cutValue > 0 && cutValue < 14) {
        click++;
        console.log("number of clicks: " + click);
        suit = "diamond";
        if (cutValue == 1) {
            one();
        }
        else if (cutValue == 2) {
            two();
        }
        else if (cutValue == 3) {
            three();
        }
        else if (cutValue == 4) {
            four();
        }
        else if (cutValue == 5) {
            five();
        }
        else if (cutValue == 6) {
            six();
        }
        else if (cutValue == 7) {
            seven();
        }
        else if (cutValue == 8) {
            eight();
        }
        else if (cutValue == 9) {
            nine();
        }
        else if (cutValue == 10) {
            ten();
        }
        else if (cutValue == 11) {
            eleven();
        }
        else if (cutValue == 12) {
            twelve();
        }
        else if (cutValue == 13) {
            thirteen();
        }
    }
    else if (cutValue > 13 && cutValue < 27) {
        click++;
        console.log("number of clicks: " + click);
        suit = "club";
        if (cutValue == 14) {
            one();
        }
        else if (cutValue == 15) {
            two();
        }
        else if (cutValue == 16) {
            three();
        }
        else if (cutValue == 17) {
            four();
        }
        else if (cutValue == 18) {
            five();
        }
        else if (cutValue == 19) {
            six();
        }
        else if (cutValue == 20) {
            seven();
        }
        else if (cutValue == 21) {
            eight();
        }
        else if (cutValue == 22) {
            nine();
        }
        else if (cutValue == 23) {
            ten();
        }
        else if (cutValue == 24) {
            eleven();
        }
        else if (cutValue == 25) {
            twelve();
        }
        else if (cutValue == 26) {
            thirteen();
        }
    }
    else if (cutValue > 26 && cutValue < 40) {
        click++;
        console.log("number of clicks: " + click);
        suit = "heart";
        if (cutValue == 27) {
            one();
        }
        else if (cutValue == 28) {
            two();
        }
        else if (cutValue == 29) {
            three();
        }
        else if (cutValue == 30) {
            four();
        }
        else if (cutValue == 31) {
            five();
        }
        else if (cutValue == 32) {
            six();
        }
        else if (cutValue == 33) {
            seven();
        }
        else if (cutValue == 34) {
            eight();
        }
        else if (cutValue == 35) {
            nine();
        }
        else if (cutValue == 36) {
            ten();
        }
        else if (cutValue == 37) {
            eleven();
        }
        else if (cutValue == 38) {
            twelve();
        }
        else if (cutValue == 39) {
            thirteen();
        }
    }
    else if (cutValue > 39 && cutValue < 53) {
        click++;
        console.log("number of clicks: " + click);
        suit = "spade";
        if (cutValue == 40) {
            one();
        }
        else if (cutValue == 41) {
            two();
        }
        else if (cutValue == 42) {
            three();
        }
        else if (cutValue == 43) {
            four();
        }
        else if (cutValue == 44) {
            five();
        }
        else if (cutValue == 45) {
            six();
        }
        else if (cutValue == 46) {
            seven();
        }
        else if (cutValue == 47) {
            eight();
        }
        else if (cutValue == 48) {
            nine();
        }
        else if (cutValue == 49) {
            ten();
        }
        else if (cutValue == 50) {
            eleven();
        }
        else if (cutValue == 51) {
            twelve();
        }
        else if (cutValue == 52) {
            thirteen();
        }
    }
    //first card in player two's hand
    if (p2nc1 > 0 && p2nc1 < 14) {
        click++;
        console.log("number of clicks: " + click);
        suit = "diamond";
        if (p2nc1 == 1) {
            one();
        }
        else if (p2nc1 == 2) {
            two();
        }
        else if (p2nc1 == 3) {
            three();
        }
        else if (p2nc1 == 4) {
            four();
        }
        else if (p2nc1 == 5) {
            five();
        }
        else if (p2nc1 == 6) {
            six();
        }
        else if (p2nc1 == 7) {
            seven();
        }
        else if (p2nc1 == 8) {
            eight();
        }
        else if (p2nc1 == 9) {
            nine();
        }
        else if (p2nc1 == 10) {
            ten();
        }
        else if (p2nc1 == 11) {
            eleven();
        }
        else if (p2nc1 == 12) {
            twelve();
        }
        else if (p2nc1 == 13) {
            thirteen();
        }
    }
    else if (p2nc1 > 13 && p2nc1 < 27) {
        click++;
        console.log("number of clicks: " + click);
        suit = "club";
        if (p2nc1 == 14) {
            one();
        }
        else if (p2nc1 == 15) {
            two();
        }
        else if (p2nc1 == 16) {
            three();
        }
        else if (p2nc1 == 17) {
            four();
        }
        else if (p2nc1 == 18) {
            five();
        }
        else if (p2nc1 == 19) {
            six();
        }
        else if (p2nc1 == 20) {
            seven();
        }
        else if (p2nc1 == 21) {
            eight();
        }
        else if (p2nc1 == 22) {
            nine();
        }
        else if (p2nc1 == 23) {
            ten();
        }
        else if (p2nc1 == 24) {
            eleven();
        }
        else if (p2nc1 == 25) {
            twelve();
        }
        else if (p2nc1 == 26) {
            thirteen();
        }
    }
    else if (p2nc1 > 26 && p2nc1 < 40) {
        click++;
        console.log("number of clicks: " + click);
        suit = "heart";
        if (p2nc1 == 27) {
            one();
        }
        else if (p2nc1 == 28) {
            two();
        }
        else if (p2nc1 == 29) {
            three();
        }
        else if (p2nc1 == 30) {
            four();
        }
        else if (p2nc1 == 31) {
            five();
        }
        else if (p2nc1 == 32) {
            six();
        }
        else if (p2nc1 == 33) {
            seven();
        }
        else if (p2nc1 == 34) {
            eight();
        }
        else if (p2nc1 == 35) {
            nine();
        }
        else if (p2nc1 == 36) {
            ten();
        }
        else if (p2nc1 == 37) {
            eleven();
        }
        else if (p2nc1 == 38) {
            twelve();
        }
        else if (p2nc1 == 39) {
            thirteen();
        }
    }
    else if (p2nc1 > 39 && p2nc1 < 53) {
        click++;
        console.log("number of clicks: " + click);
        suit = "spade";
        if (p2nc1 == 40) {
            one();
        }
        else if (p2nc1 == 41) {
            two();
        }
        else if (p2nc1 == 42) {
            three();
        }
        else if (p2nc1 == 43) {
            four();
        }
        else if (p2nc1 == 44) {
            five();
        }
        else if (p2nc1 == 45) {
            six();
        }
        else if (p2nc1 == 46) {
            seven();
        }
        else if (p2nc1 == 47) {
            eight();
        }
        else if (p2nc1 == 48) {
            nine();
        }
        else if (p2nc1 == 49) {
            ten();
        }
        else if (p2nc1 == 50) {
            eleven();
        }
        else if (p2nc1 == 51) {
            twelve();
        }
        else if (p2nc1 == 52) {
            thirteen();
        }
    }
    //second card in player two's hand
    if (p2nc2 > 0 && p2nc2 < 14) {
        click++;
        console.log("number of clicks: " + click);
        suit = "diamond";
        if (p2nc2 == 1) {
            one();
        }
        else if (p2nc2 == 2) {
            two();
        }
        else if (p2nc2 == 3) {
            three();
        }
        else if (p2nc2 == 4) {
            four();
        }
        else if (p2nc2 == 5) {
            five();
        }
        else if (p2nc2 == 6) {
            six();
        }
        else if (p2nc2 == 7) {
            seven();
        }
        else if (p2nc2 == 8) {
            eight();
        }
        else if (p2nc2 == 9) {
            nine();
        }
        else if (p2nc2 == 10) {
            ten();
        }
        else if (p2nc2 == 11) {
            eleven();
        }
        else if (p2nc2 == 12) {
            twelve();
        }
        else if (p2nc2 == 13) {
            thirteen();
        }
    }
    else if (p2nc2 > 13 && p2nc2 < 27) {
        click++;
        console.log("number of clicks: " + click);
        suit = "club";
        if (p2nc2 == 14) {
            one();
        }
        else if (p2nc2 == 15) {
            two();
        }
        else if (p2nc2 == 16) {
            three();
        }
        else if (p2nc2 == 17) {
            four();
        }
        else if (p2nc2 == 18) {
            five();
        }
        else if (p2nc2 == 19) {
            six();
        }
        else if (p2nc2 == 20) {
            seven();
        }
        else if (p2nc2 == 21) {
            eight();
        }
        else if (p2nc2 == 22) {
            nine();
        }
        else if (p2nc2 == 23) {
            ten();
        }
        else if (p2nc2 == 24) {
            eleven();
        }
        else if (p2nc2 == 25) {
            twelve();
        }
        else if (p2nc2 == 26) {
            thirteen();
        }
    }
    else if (p2nc2 > 26 && p2nc2 < 40) {
        click++;
        console.log("number of clicks: " + click);
        suit = "heart";
        if (p2nc2 == 27) {
            one();
        }
        else if (p2nc2 == 28) {
            two();
        }
        else if (p2nc2 == 29) {
            three();
        }
        else if (p2nc2 == 30) {
            four();
        }
        else if (p2nc2 == 31) {
            five();
        }
        else if (p2nc2 == 32) {
            six();
        }
        else if (p2nc2 == 33) {
            seven();
        }
        else if (p2nc2 == 34) {
            eight();
        }
        else if (p2nc2 == 35) {
            nine();
        }
        else if (p2nc2 == 36) {
            ten();
        }
        else if (p2nc2 == 37) {
            eleven();
        }
        else if (p2nc2 == 38) {
            twelve();
        }
        else if (p2nc2 == 39) {
            thirteen();
        }
    }
    else if (p2nc2 > 39 && p2nc2 < 53) {
        click++;
        console.log("number of clicks: " + click);
        suit = "spade";
        if (p2nc2 == 40) {
            one();
        }
        else if (p2nc2 == 41) {
            two();
        }
        else if (p2nc2 == 42) {
            three();
        }
        else if (p2nc2 == 43) {
            four();
        }
        else if (p2nc2 == 44) {
            five();
        }
        else if (p2nc2 == 45) {
            six();
        }
        else if (p2nc2 == 46) {
            seven();
        }
        else if (p2nc2 == 47) {
            eight();
        }
        else if (p2nc2 == 48) {
            nine();
        }
        else if (p2nc2 == 49) {
            ten();
        }
        else if (p2nc2 == 50) {
            eleven();
        }
        else if (p2nc2 == 51) {
            twelve();
        }
        else if (p2nc2 == 52) {
            thirteen();
        }
    }
    //third card in player two's hand
    if (p2nc3 > 0 && p2nc3 < 14) {
        click++;
        console.log("number of clicks: " + click);
        suit = "diamond";
        if (p2nc3 == 1) {
            one();
        }
        else if (p2nc3 == 2) {
            two();
        }
        else if (p2nc3 == 3) {
            three();
        }
        else if (p2nc3 == 4) {
            four();
        }
        else if (p2nc3 == 5) {
            five();
        }
        else if (p2nc3 == 6) {
            six();
        }
        else if (p2nc3 == 7) {
            seven();
        }
        else if (p2nc3 == 8) {
            eight();
        }
        else if (p2nc3 == 9) {
            nine();
        }
        else if (p2nc3 == 10) {
            ten();
        }
        else if (p2nc3 == 11) {
            eleven();
        }
        else if (p2nc3 == 12) {
            twelve();
        }
        else if (p2nc3 == 13) {
            thirteen();
        }
    }
    else if (p2nc3 > 13 && p2nc3 < 27) {
        click++;
        console.log("number of clicks: " + click);
        suit = "club";
        if (p2nc3 == 14) {
            one();
        }
        else if (p2nc3 == 15) {
            two();
        }
        else if (p2nc3 == 16) {
            three();
        }
        else if (p2nc3 == 17) {
            four();
        }
        else if (p2nc3 == 18) {
            five();
        }
        else if (p2nc3 == 19) {
            six();
        }
        else if (p2nc3 == 20) {
            seven();
        }
        else if (p2nc3 == 21) {
            eight();
        }
        else if (p2nc3 == 22) {
            nine();
        }
        else if (p2nc3 == 23) {
            ten();
        }
        else if (p2nc3 == 24) {
            eleven();
        }
        else if (p2nc3 == 25) {
            twelve();
        }
        else if (p2nc3 == 26) {
            thirteen();
        }
    }
    else if (p2nc3 > 26 && p2nc3 < 40) {
        click++;
        console.log("number of clicks: " + click);
        suit = "heart";
        if (p2nc3 == 27) {
            one();
        }
        else if (p2nc3 == 28) {
            two();
        }
        else if (p2nc3 == 29) {
            three();
        }
        else if (p2nc3 == 30) {
            four();
        }
        else if (p2nc3 == 31) {
            five();
        }
        else if (p2nc3 == 32) {
            six();
        }
        else if (p2nc3 == 33) {
            seven();
        }
        else if (p2nc3 == 34) {
            eight();
        }
        else if (p2nc3 == 35) {
            nine();
        }
        else if (p2nc3 == 36) {
            ten();
        }
        else if (p2nc3 == 37) {
            eleven();
        }
        else if (p2nc3 == 38) {
            twelve();
        }
        else if (p2nc3 == 39) {
            thirteen();
        }
    }
    else if (p2nc3 > 39 && p2nc3 < 53) {
        click++;
        console.log("number of clicks: " + click);
        suit = "spade";
        if (p2nc3 == 40) {
            one();
        }
        else if (p2nc3 == 41) {
            two();
        }
        else if (p2nc3 == 42) {
            three();
        }
        else if (p2nc3 == 43) {
            four();
        }
        else if (p2nc3 == 44) {
            five();
        }
        else if (p2nc3 == 45) {
            six();
        }
        else if (p2nc3 == 46) {
            seven();
        }
        else if (p2nc3 == 47) {
            eight();
        }
        else if (p2nc3 == 48) {
            nine();
        }
        else if (p2nc3 == 49) {
            ten();
        }
        else if (p2nc3 == 50) {
            eleven();
        }
        else if (p2nc3 == 51) {
            twelve();
        }
        else if (p2nc3 == 52) {
            thirteen();
        }
    }
    //fourth card in player two's hand
    if (p2nc4 > 0 && p2nc4 < 14) {
        click++;
        console.log("number of clicks: " + click);
        suit = "diamond";
        if (p2nc4 == 1) {
            one();
        }
        else if (p2nc4 == 2) {
            two();
        }
        else if (p2nc4 == 3) {
            three();
        }
        else if (p2nc4 == 4) {
            four();
        }
        else if (p2nc4 == 5) {
            five();
        }
        else if (p2nc4 == 6) {
            six();
        }
        else if (p2nc4 == 7) {
            seven();
        }
        else if (p2nc4 == 8) {
            eight();
        }
        else if (p2nc4 == 9) {
            nine();
        }
        else if (p2nc4 == 10) {
            ten();
        }
        else if (p2nc4 == 11) {
            eleven();
        }
        else if (p2nc4 == 12) {
            twelve();
        }
        else if (p2nc4 == 13) {
            thirteen();
        }
    }
    else if (p2nc4 > 13 && p2nc4 < 27) {
        click++;
        console.log("number of clicks: " + click);
        suit = "club";
        if (p2nc4 == 14) {
            one();
        }
        else if (p2nc4 == 15) {
            two();
        }
        else if (p2nc4 == 16) {
            three();
        }
        else if (p2nc4 == 17) {
            four();
        }
        else if (p2nc4 == 18) {
            five();
        }
        else if (p2nc4 == 19) {
            six();
        }
        else if (p2nc4 == 20) {
            seven();
        }
        else if (p2nc4 == 21) {
            eight();
        }
        else if (p2nc4 == 22) {
            nine();
        }
        else if (p2nc4 == 23) {
            ten();
        }
        else if (p2nc4 == 24) {
            eleven();
        }
        else if (p2nc4 == 25) {
            twelve();
        }
        else if (p2nc4 == 26) {
            thirteen();
        }
    }
    else if (p2nc4 > 26 && p2nc4 < 40) {
        click++;
        console.log("number of clicks: " + click);
        suit = "heart";
        if (p2nc4 == 27) {
            one();
        }
        else if (p2nc4 == 28) {
            two();
        }
        else if (p2nc4 == 29) {
            three();
        }
        else if (p2nc4 == 30) {
            four();
        }
        else if (p2nc4 == 31) {
            five();
        }
        else if (p2nc4 == 32) {
            six();
        }
        else if (p2nc4 == 33) {
            seven();
        }
        else if (p2nc4 == 34) {
            eight();
        }
        else if (p2nc4 == 35) {
            nine();
        }
        else if (p2nc4 == 36) {
            ten();
        }
        else if (p2nc4 == 37) {
            eleven();
        }
        else if (p2nc4 == 38) {
            twelve();
        }
        else if (p2nc4 == 39) {
            thirteen();
        }
    }
    else if (p2nc4 > 39 && p2nc4 < 53) {
        click++;
        console.log("number of clicks: " + click);
        suit = "spade";
        if (p2nc4 == 40) {
            one();
        }
        else if (p2nc4 == 41) {
            two();
        }
        else if (p2nc4 == 42) {
            three();
        }
        else if (p2nc4 == 43) {
            four();
        }
        else if (p2nc4 == 44) {
            five();
        }
        else if (p2nc4 == 45) {
            six();
        }
        else if (p2nc4 == 46) {
            seven();
        }
        else if (p2nc4 == 47) {
            eight();
        }
        else if (p2nc4 == 48) {
            nine();
        }
        else if (p2nc4 == 49) {
            ten();
        }
        else if (p2nc4 == 50) {
            eleven();
        }
        else if (p2nc4 == 51) {
            twelve();
        }
        else if (p2nc4 == 52) {
            thirteen();
        }
    }
}
function whichNumberCrib() {//this confirms the values of each of the cards in the crib
//this starts with the cut card
    if (cutValue > 0 && cutValue < 14) {
        click++;
        console.log("number of clicks: " + click);
        suit = "diamond";
        if (cutValue == 1) {
            one();
        }
        else if (cutValue == 2) {
            two();
        }
        else if (cutValue == 3) {
            three();
        }
        else if (cutValue == 4) {
            four();
        }
        else if (cutValue == 5) {
            five();
        }
        else if (cutValue == 6) {
            six();
        }
        else if (cutValue == 7) {
            seven();
        }
        else if (cutValue == 8) {
            eight();
        }
        else if (cutValue == 9) {
            nine();
        }
        else if (cutValue == 10) {
            ten();
        }
        else if (cutValue == 11) {
            eleven();
        }
        else if (cutValue == 12) {
            twelve();
        }
        else if (cutValue == 13) {
            thirteen();
        }
    }
    else if (cutValue > 13 && cutValue < 27) {
        click++;
        console.log("number of clicks: " + click);
        suit = "club";
        if (cutValue == 14) {
            one();
        }
        else if (cutValue == 15) {
            two();
        }
        else if (cutValue == 16) {
            three();
        }
        else if (cutValue == 17) {
            four();
        }
        else if (cutValue == 18) {
            five();
        }
        else if (cutValue == 19) {
            six();
        }
        else if (cutValue == 20) {
            seven();
        }
        else if (cutValue == 21) {
            eight();
        }
        else if (cutValue == 22) {
            nine();
        }
        else if (cutValue == 23) {
            ten();
        }
        else if (cutValue == 24) {
            eleven();
        }
        else if (cutValue == 25) {
            twelve();
        }
        else if (cutValue == 26) {
            thirteen();
        }
    }
    else if (cutValue > 26 && cutValue < 40) {
        click++;
        console.log("number of clicks: " + click);
        suit = "heart";
        if (cutValue == 27) {
            one();
        }
        else if (cutValue == 28) {
            two();
        }
        else if (cutValue == 29) {
            three();
        }
        else if (cutValue == 30) {
            four();
        }
        else if (cutValue == 31) {
            five();
        }
        else if (cutValue == 32) {
            six();
        }
        else if (cutValue == 33) {
            seven();
        }
        else if (cutValue == 34) {
            eight();
        }
        else if (cutValue == 35) {
            nine();
        }
        else if (cutValue == 36) {
            ten();
        }
        else if (cutValue == 37) {
            eleven();
        }
        else if (cutValue == 38) {
            twelve();
        }
        else if (cutValue == 39) {
            thirteen();
        }
    }
    else if (cutValue > 39 && cutValue < 53) {
        click++;
        console.log("number of clicks: " + click);
        suit = "spade";
        if (cutValue == 40) {
            one();
        }
        else if (cutValue == 41) {
            two();
        }
        else if (cutValue == 42) {
            three();
        }
        else if (cutValue == 43) {
            four();
        }
        else if (cutValue == 44) {
            five();
        }
        else if (cutValue == 45) {
            six();
        }
        else if (cutValue == 46) {
            seven();
        }
        else if (cutValue == 47) {
            eight();
        }
        else if (cutValue == 48) {
            nine();
        }
        else if (cutValue == 49) {
            ten();
        }
        else if (cutValue == 50) {
            eleven();
        }
        else if (cutValue == 51) {
            twelve();
        }
        else if (cutValue == 52) {
            thirteen();
        }
    }
    //first card in the crib
    if (crib1 > 0 && crib1 < 14) {
        click++;
        console.log("number of clicks: " + click);
        suit = "diamond";
        if (crib1 == 1) {
            one();
        }
        else if (crib1 == 2) {
            two();
        }
        else if (crib1 == 3) {
            three();
        }
        else if (crib1 == 4) {
            four();
        }
        else if (crib1 == 5) {
            five();
        }
        else if (crib1 == 6) {
            six();
        }
        else if (crib1 == 7) {
            seven();
        }
        else if (crib1 == 8) {
            eight();
        }
        else if (crib1 == 9) {
            nine();
        }
        else if (crib1 == 10) {
            ten();
        }
        else if (crib1 == 11) {
            eleven();
        }
        else if (crib1 == 12) {
            twelve();
        }
        else if (crib1 == 13) {
            thirteen();
        }
    }
    else if (crib1 > 13 && crib1 < 27) {
        click++;
        console.log("number of clicks: " + click);
        suit = "club";
        if (crib1 == 14) {
            one();
        }
        else if (crib1 == 15) {
            two();
        }
        else if (crib1 == 16) {
            three();
        }
        else if (crib1 == 17) {
            four();
        }
        else if (crib1 == 18) {
            five();
        }
        else if (crib1 == 19) {
            six();
        }
        else if (crib1 == 20) {
            seven();
        }
        else if (crib1 == 21) {
            eight();
        }
        else if (crib1 == 22) {
            nine();
        }
        else if (crib1 == 23) {
            ten();
        }
        else if (crib1 == 24) {
            eleven();
        }
        else if (crib1 == 25) {
            twelve();
        }
        else if (crib1 == 26) {
            thirteen();
        }
    }
    else if (crib1 > 26 && crib1 < 40) {
        click++;
        console.log("number of clicks: " + click);
        suit = "heart";
        if (crib1 == 27) {
            one();
        }
        else if (crib1 == 28) {
            two();
        }
        else if (crib1 == 29) {
            three();
        }
        else if (crib1 == 30) {
            four();
        }
        else if (crib1 == 31) {
            five();
        }
        else if (crib1 == 32) {
            six();
        }
        else if (crib1 == 33) {
            seven();
        }
        else if (crib1 == 34) {
            eight();
        }
        else if (crib1 == 35) {
            nine();
        }
        else if (crib1 == 36) {
            ten();
        }
        else if (crib1 == 37) {
            eleven();
        }
        else if (crib1 == 38) {
            twelve();
        }
        else if (crib1 == 39) {
            thirteen();
        }
    }
    else if (crib1 > 39 && crib1 < 53) {
        click++;
        console.log("number of clicks: " + click);
        suit = "spade";
        if (crib1 == 40) {
            one();
        }
        else if (crib1 == 41) {
            two();
        }
        else if (crib1 == 42) {
            three();
        }
        else if (crib1 == 43) {
            four();
        }
        else if (crib1 == 44) {
            five();
        }
        else if (crib1 == 45) {
            six();
        }
        else if (crib1 == 46) {
            seven();
        }
        else if (crib1 == 47) {
            eight();
        }
        else if (crib1 == 48) {
            nine();
        }
        else if (crib1 == 49) {
            ten();
        }
        else if (crib1 == 50) {
            eleven();
        }
        else if (crib1 == 51) {
            twelve();
        }
        else if (crib1 == 52) {
            thirteen();
        }
    }
    //second card in the crib
    if (crib2 > 0 && crib2 < 14) {
        click++;
        console.log("number of clicks: " + click);
        suit = "diamond";
        if (crib2 == 1) {
            one();
        }
        else if (crib2 == 2) {
            two();
        }
        else if (crib2 == 3) {
            three();
        }
        else if (crib2 == 4) {
            four();
        }
        else if (crib2 == 5) {
            five();
        }
        else if (crib2 == 6) {
            six();
        }
        else if (crib2 == 7) {
            seven();
        }
        else if (crib2 == 8) {
            eight();
        }
        else if (crib2 == 9) {
            nine();
        }
        else if (crib2 == 10) {
            ten();
        }
        else if (crib2 == 11) {
            eleven();
        }
        else if (crib2 == 12) {
            twelve();
        }
        else if (crib2 == 13) {
            thirteen();
        }
    }
    else if (crib2 > 13 && crib2 < 27) {
        click++;
        console.log("number of clicks: " + click);
        suit = "club";
        if (crib2 == 14) {
            one();
        }
        else if (crib2 == 15) {
            two();
        }
        else if (crib2 == 16) {
            three();
        }
        else if (crib2 == 17) {
            four();
        }
        else if (crib2 == 18) {
            five();
        }
        else if (crib2 == 19) {
            six();
        }
        else if (crib2 == 20) {
            seven();
        }
        else if (crib2 == 21) {
            eight();
        }
        else if (crib2 == 22) {
            nine();
        }
        else if (crib2 == 23) {
            ten();
        }
        else if (crib2 == 24) {
            eleven();
        }
        else if (crib2 == 25) {
            twelve();
        }
        else if (crib2 == 26) {
            thirteen();
        }
    }
    else if (crib2 > 26 && crib2 < 40) {
        click++;
        console.log("number of clicks: " + click);
        suit = "heart";
        if (crib2 == 27) {
            one();
        }
        else if (crib2 == 28) {
            two();
        }
        else if (crib2 == 29) {
            three();
        }
        else if (crib2 == 30) {
            four();
        }
        else if (crib2 == 31) {
            five();
        }
        else if (crib2 == 32) {
            six();
        }
        else if (crib2 == 33) {
            seven();
        }
        else if (crib2 == 34) {
            eight();
        }
        else if (crib2 == 35) {
            nine();
        }
        else if (crib2 == 36) {
            ten();
        }
        else if (crib2 == 37) {
            eleven();
        }
        else if (crib2 == 38) {
            twelve();
        }
        else if (crib2 == 39) {
            thirteen();
        }
    }
    else if (crib2 > 39 && crib2 < 53) {
        click++;
        console.log("number of clicks: " + click);
        suit = "spade";
        if (crib2 == 40) {
            one();
        }
        else if (crib2 == 41) {
            two();
        }
        else if (crib2 == 42) {
            three();
        }
        else if (crib2 == 43) {
            four();
        }
        else if (crib2 == 44) {
            five();
        }
        else if (crib2 == 45) {
            six();
        }
        else if (crib2 == 46) {
            seven();
        }
        else if (crib2 == 47) {
            eight();
        }
        else if (crib2 == 48) {
            nine();
        }
        else if (crib2 == 49) {
            ten();
        }
        else if (crib2 == 50) {
            eleven();
        }
        else if (crib2 == 51) {
            twelve();
        }
        else if (crib2 == 52) {
            thirteen();
        }
    }
    //third card in the crib
    if (crib3 > 0 && crib3 < 14) {
        click++;
        console.log("number of clicks: " + click);
        suit = "diamond";
        if (crib3 == 1) {
            one();
        }
        else if (crib3 == 2) {
            two();
        }
        else if (crib3 == 3) {
            three();
        }
        else if (crib3 == 4) {
            four();
        }
        else if (crib3 == 5) {
            five();
        }
        else if (crib3 == 6) {
            six();
        }
        else if (crib3 == 7) {
            seven();
        }
        else if (crib3 == 8) {
            eight();
        }
        else if (crib3 == 9) {
            nine();
        }
        else if (crib3 == 10) {
            ten();
        }
        else if (crib3 == 11) {
            eleven();
        }
        else if (crib3 == 12) {
            twelve();
        }
        else if (crib3 == 13) {
            thirteen();
        }
    }
    else if (crib3 > 13 && crib3 < 27) {
        click++;
        console.log("number of clicks: " + click);
        suit = "club";
        if (crib3 == 14) {
            one();
        }
        else if (crib3 == 15) {
            two();
        }
        else if (crib3 == 16) {
            three();
        }
        else if (crib3 == 17) {
            four();
        }
        else if (crib3 == 18) {
            five();
        }
        else if (crib3 == 19) {
            six();
        }
        else if (crib3 == 20) {
            seven();
        }
        else if (crib3 == 21) {
            eight();
        }
        else if (crib3 == 22) {
            nine();
        }
        else if (crib3 == 23) {
            ten();
        }
        else if (crib3 == 24) {
            eleven();
        }
        else if (crib3 == 25) {
            twelve();
        }
        else if (crib3 == 26) {
            thirteen();
        }
    }
    else if (crib3 > 26 && crib3 < 40) {
        click++;
        console.log("number of clicks: " + click);
        suit = "heart";
        if (crib3 == 27) {
            one();
        }
        else if (crib3 == 28) {
            two();
        }
        else if (crib3 == 29) {
            three();
        }
        else if (crib3 == 30) {
            four();
        }
        else if (crib3 == 31) {
            five();
        }
        else if (crib3 == 32) {
            six();
        }
        else if (crib3 == 33) {
            seven();
        }
        else if (crib3 == 34) {
            eight();
        }
        else if (crib3 == 35) {
            nine();
        }
        else if (crib3 == 36) {
            ten();
        }
        else if (crib3 == 37) {
            eleven();
        }
        else if (crib3 == 38) {
            twelve();
        }
        else if (crib3 == 39) {
            thirteen();
        }
    }
    else if (crib3 > 39 && crib3 < 53) {
        click++;
        console.log("number of clicks: " + click);
        suit = "spade";
        if (crib3 == 40) {
            one();
        }
        else if (crib3 == 41) {
            two();
        }
        else if (crib3 == 42) {
            three();
        }
        else if (crib3 == 43) {
            four();
        }
        else if (crib3 == 44) {
            five();
        }
        else if (crib3 == 45) {
            six();
        }
        else if (crib3 == 46) {
            seven();
        }
        else if (crib3 == 47) {
            eight();
        }
        else if (crib3 == 48) {
            nine();
        }
        else if (crib3 == 49) {
            ten();
        }
        else if (crib3 == 50) {
            eleven();
        }
        else if (crib3 == 51) {
            twelve();
        }
        else if (crib3 == 52) {
            thirteen();
        }
    }
    //fourth card in the crib
    if (crib4 > 0 && crib4 < 14) {
        click++;
        console.log("number of clicks: " + click);
        suit = "diamond";
        if (crib4 == 1) {
            one();
        }
        else if (crib4 == 2) {
            two();
        }
        else if (crib4 == 3) {
            three();
        }
        else if (crib4 == 4) {
            four();
        }
        else if (crib4 == 5) {
            five();
        }
        else if (crib4 == 6) {
            six();
        }
        else if (crib4 == 7) {
            seven();
        }
        else if (crib4 == 8) {
            eight();
        }
        else if (crib4 == 9) {
            nine();
        }
        else if (crib4 == 10) {
            ten();
        }
        else if (crib4 == 11) {
            eleven();
        }
        else if (crib4 == 12) {
            twelve();
        }
        else if (crib4 == 13) {
            thirteen();
        }
    }
    else if (crib4 > 13 && crib4 < 27) {
        click++;
        console.log("number of clicks: " + click);
        suit = "club";
        if (crib4 == 14) {
            one();
        }
        else if (crib4 == 15) {
            two();
        }
        else if (crib4 == 16) {
            three();
        }
        else if (crib4 == 17) {
            four();
        }
        else if (crib4 == 18) {
            five();
        }
        else if (crib4 == 19) {
            six();
        }
        else if (crib4 == 20) {
            seven();
        }
        else if (crib4 == 21) {
            eight();
        }
        else if (crib4 == 22) {
            nine();
        }
        else if (crib4 == 23) {
            ten();
        }
        else if (crib4 == 24) {
            eleven();
        }
        else if (crib4 == 25) {
            twelve();
        }
        else if (crib4 == 26) {
            thirteen();
        }
    }
    else if (crib4 > 26 && crib4 < 40) {
        click++;
        console.log("number of clicks: " + click);
        suit = "heart";
        if (crib4 == 27) {
            one();
        }
        else if (crib4 == 28) {
            two();
        }
        else if (crib4 == 29) {
            three();
        }
        else if (crib4 == 30) {
            four();
        }
        else if (crib4 == 31) {
            five();
        }
        else if (crib4 == 32) {
            six();
        }
        else if (crib4 == 33) {
            seven();
        }
        else if (crib4 == 34) {
            eight();
        }
        else if (crib4 == 35) {
            nine();
        }
        else if (crib4 == 36) {
            ten();
        }
        else if (crib4 == 37) {
            eleven();
        }
        else if (crib4 == 38) {
            twelve();
        }
        else if (crib4 == 39) {
            thirteen();
        }
    }
    else if (crib4 > 39 && crib4 < 53) {
        click++;
        console.log("number of clicks: " + click);
        suit = "spade";
        if (crib4 == 40) {
            one();
        }
        else if (crib4 == 41) {
            two();
        }
        else if (crib4 == 42) {
            three();
        }
        else if (crib4 == 43) {
            four();
        }
        else if (crib4 == 44) {
            five();
        }
        else if (crib4 == 45) {
            six();
        }
        else if (crib4 == 46) {
            seven();
        }
        else if (crib4 == 47) {
            eight();
        }
        else if (crib4 == 48) {
            nine();
        }
        else if (crib4 == 49) {
            ten();
        }
        else if (crib4 == 50) {
            eleven();
        }
        else if (crib4 == 51) {
            twelve();
        }
        else if (crib4 == 52) {
            thirteen();
        }
    }
}


function cutCheck() {//checks whether the card you clicked will be the cut card or not
    if (click == 1 || click == 6 || click == 11) {//if it is the first, sixth, or eleventh card, it is the cut card
        cut = true;
    }
    else {//if it is any other card, it is not the cut card
        cut = false;
    }
}
function suitCheck() {//checks the suit of each card, as well as if there is a jack
    if (click == 1) {
        nibSuit = suit;//the nibSuit (the suit of the cut card)
        if (cutValue == 11 || cutValue == 24 || cutValue == 37 || cutValue == 50) {//if the card is a jack
            jack = true;
            jackSuit = 'idc';//this is so nibs can't happen if the cut card is a jack
        }
    }
    else if (click == 2) {
        twoSuit = suit;//the twoSuit is the suit of player one's first card
        if (p1nc1 == 11 || p1nc1 == 24 || p1nc1 == 37 || p1nc1 == 50) {
            jack = true;
            jackSuit = suit;//if the card is a jack, make jackSuit the suit of this card
            if (jackSuit != nibSuit){//if the suit of the jack does not match the suit of the cut card
                jackSuit = "nothing";//then change the suit of the Jack to something else, as this won't get you nibs
            }
        }
    }
    else if (click == 3) {
        threeSuit = suit;//the threeSuit is the suit of player one's second card
        if (p1nc2 == 11 || p1nc2 == 24 || p1nc2 == 37 || p1nc2 == 50) {
            jack = true;
            if (jackSuit == nibSuit){//if there is already a jack with the same suit as the cut card, then do nothing (as we can count nibs now)
                jackSuit = jackSuit;
            }
            else if (jackSuit != nibSuit){//if there's not nibs yet, then try the suit of THIS jack
                jackSuit = suit;
            }
        }
    }
    else if (click == 4) {
        fourSuit = suit;//the fourSuit is the suit of player one's third card
        if (p1nc3 == 11 || p1nc3 == 24 || p1nc3 == 37 || p1nc3 == 50) {
            jack = true;
            if (jackSuit == nibSuit){//if there is already a jack with the same suit as the cut card, then do nothing (as we can count nibs now)
                jackSuit = jackSuit;
            }
            else if (jackSuit != nibSuit){//if there's not nibs yet, then try the suit of THIS jack
                jackSuit = suit;
            }
        }
    }
    else if (click == 5) {
        fiveSuit = suit;//the fiveSuit is the suit of player one's fourth card
        if (p1nc4 == 11 || p1nc4 == 24 || p1nc4 == 37 || p1nc4 == 50) {
            jack = true;
            if (jackSuit == nibSuit){//if there is already a jack with the same suit as the cut card, then do nothing (as we can count nibs now)
                jackSuit = jackSuit;
            }
            else if (jackSuit != nibSuit){
                jackSuit = suit;
            }
        }
    }
    else if (click == 6) {
        if (jackSuit=='nada') {//if there was already nibs scored
            nibSuit = 'actuallyNothing';//make the nibSuit something that can't ever give nibs again
            saveNib = suit;//make this the suit (for flush counting)
        }
        else {
            nibSuit = suit;
        }
        if (cutValue == 11 || cutValue == 24 || cutValue == 37 || cutValue == 50) {
            jack = true;
            jackSuit = 'idc';//this is so nibs can't happen if the cut card is a jack
        }
    }
    else if (click == 7) {
        twoSuit = suit;
        if (p2nc1 == 11 || p2nc1 == 24 || p2nc1 == 37 || p2nc1 == 50) {
            jack = true;
            jackSuit = suit;
            if (jackSuit != nibSuit){//if the suit of the jack does not match the suit of the cut card
                jackSuit = "nothing";//then change the suit of the Jack to something else, as this won't get you nibs
            }
        }
    }
    else if (click == 8) {
        threeSuit = suit;
        if (p2nc2 == 11 || p2nc2 == 24 || p2nc2 == 37 || p2nc2== 50) {
            jack = true;
            if (jackSuit == nibSuit){//if there is already a jack with the same suit as the cut card, then do nothing (as we can count nibs now)
                jackSuit = jackSuit;
            }
            else if (jackSuit != nibSuit){//if there's not nibs yet, then try the suit of THIS jack
                jackSuit = suit;
            }
        }
    }
    else if (click == 9) {
        fourSuit = suit;
        if (p2nc3 == 11 || p2nc3 == 24 || p2nc3 == 37 || p2nc3 == 50) {
            jack = true;
            if (jackSuit == nibSuit){//if there is already a jack with the same suit as the cut card, then do nothing (as we can count nibs now)
                jackSuit = jackSuit;
            }
            else if (jackSuit != nibSuit){//if there's not nibs yet, then try the suit of THIS jack
                jackSuit = suit;
            }
        }
    }
    else if (click == 10) {
        fiveSuit = suit;
        if (p2nc4 == 11 || p2nc4 == 24 || p2nc4 == 37 || p2nc4 == 50) {
            jack = true;
            if (jackSuit == nibSuit){//if there is already a jack with the same suit as the cut card, then do nothing (as we can count nibs now)
                jackSuit = jackSuit;
            }
            else if (jackSuit != nibSuit){//if there's not nibs yet, then try the suit of THIS jack
                jackSuit = suit;
            }
        }
    }
    else if (click == 11) {
        if (jackSuit=='nada') {
            nibSuit = 'actuallyNothing';//make the nibSuit something that can't ever give nibs again
            saveNib = suit;//make this the suit (for flush counting)
        }
        else {
            nibSuit = suit;
        }
        if (cutValue == 11 || cutValue == 24 || cutValue == 37 || cutValue == 50) {
            jack = true;
            jackSuit = 'idc';//this is so nibs can't happen if the cut card is a jack
        }
    }
    else if (click == 12) {
        twoSuit = suit;
        if (crib1 == 11 || crib1 == 24 || crib1 == 37 || crib1 == 50) {
            jack = true;
            jackSuit = suit;
            if (jackSuit != nibSuit){//if the suit of the jack does not match the suit of the cut card
                jackSuit = "nothing";//then change the suit of the Jack to something else, as this won't get you nibs
            }
        }
    }
    else if (click == 13) {
        threeSuit = suit;
        if (crib2 == 11 || crib2 == 24 || crib2 == 37 || crib2== 50) {
            jack = true;
            if (jackSuit == nibSuit){//if there is already a jack with the same suit as the cut card, then do nothing (as we can count nibs now)
                jackSuit = jackSuit;
            }
            else if (jackSuit != nibSuit){//if there's not nibs yet, then try the suit of THIS jack
                jackSuit = suit;
            }
        }
    }
    else if (click == 14) {
        fourSuit = suit;
        if (crib3 == 11 || crib3 == 24 || crib3 == 37 || crib3 == 50) {
            jack = true;
            if (jackSuit == nibSuit){//if there is already a jack with the same suit as the cut card, then do nothing (as we can count nibs now)
                jackSuit = jackSuit;
            }
            else if (jackSuit != nibSuit){//if there's not nibs yet, then try the suit of THIS jack
                jackSuit = suit;
            }
        }
    }
    else if (click == 15) {
        fiveSuit = suit;
        if (crib4 == 11 || crib4 == 24 || crib4 == 37 || crib4 == 50) {
            jack = true;
            if (jackSuit == nibSuit){//if there is already a jack with the same suit as the cut card, then do nothing (as we can count nibs now)
                jackSuit = jackSuit;
            }
            else if (jackSuit != nibSuit){//if there's not nibs yet, then try the suit of THIS jack
                jackSuit = suit;
            }
        }
    }
}
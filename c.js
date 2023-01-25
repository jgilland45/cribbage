var suit;//holds a changing variable of the 'suit' of any given card
var nibSuit;//holds the suit for the cut card
var twoSuit;//holds the suit for the first player card
var threeSuit;//holds the suit for the second player card
var fourSuit;//holds the suit for the third player card
var fiveSuit;//holds the suit for the fourth player card
var jack = false;//determines if there is a jack or not (there is no jack to start)
var jackSuit;//holds the suit for any card that is a jack
var final = 0;//holds the 'final' score of that round
var one;//the first card placeholder
var two;//the second card placeholder
var three;//the third card placeholder
var four;//the fourth card placeholder
var five;//the fifth card placeholder
var fifteen = 0;//the amount of point gained from fifteens
var pair = 0;//the amount of point gained from pairs
var nibs = 0;//the amount of point gained from nibs
var flush = 0;//the amount of point gained from flushes
var run = 0;//the amount of point gained from runs
var average = 0;//the average score from the last 10 hands
function score_fifteens(one, two, three, four, five) {//scores points based on how many 'fifteens' can be made
    //a fifteen is when any combination of cards in a hand adds up to fifteen
    //a fifteen is awarded two points
    var hand = new Array(one, two, three, four, five);//the cards in the hand
    var score = 0;
    var as = 0; bs = 1; cs = 2; ds = 3;
    function sort(one, two, three, four, five) {//sorts the hand array in ascending order
        hand.sort(function (a, b) { return a - b });
    }
    sort();
    for (a = as; a < 5; a++) {
        for (b = bs; b < 5; b++) {
            for (c = cs; c < 5; c++) {
                for (d = ds; d < 5; d++) {
                    var count = hand[a] + hand[b] + hand[c] + hand[d];//adds up four cards
                    if (count == 15) {
                        score += 2;
                    }
                }
                ds++;
                var count = hand[a] + hand[b] + hand[c];//adds up three cards
                if (count == 15) {
                    score += 2;
                }
            }
            cs++;
            var count = hand[a] + hand[b];//adds up two cards
            if (count == 15) {
                score += 2;
            }
        }
        bs++;
    }
    var count = hand[0] + hand[1] + hand[2] + hand[3] + hand[4];//adds up all cards
    if (count == 15) {
        score += 2;
    }
    //i took the code above from this website: https://www.webdeveloper.com/d/30996-cribbage-scoring/3
    //however, this code missed some combinations. Below are these combinations
    var count = hand[1] + hand[2] + hand[3];//adds up the middle three cards
    if (count == 15) {
        score += 2;
    }
    var count = hand[2] + hand[3] + hand[4];//adds up last three cards
    if (count == 15) {
        score += 2;
    }
    var count = hand[1] + hand[2] + hand[4];//adds up second, third, and fifth cards
    if (count == 15) {
        score += 2;
    }
    var count = hand[1] + hand[3] + hand[4];//adds up second, fourth, and fifth cards
    if (count == 15) {
        score += 2;
    }
    var count = hand[1] + hand[2] + hand[3] + hand[4];//adds up last four cards
    if (count == 15) {
        score += 2;
    }
    var count = hand[0] + hand[2] + hand[3] + hand[4];//adds up first, third, fourth, and fifth cards
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
    return false;
}

function score_pairs(one, two, three, four, five) {//scores the pionts gained from 'pairs'
//a pair is when two cards have the same value (eg. two 5's, two J's, etc.)
//a pair is worth two points
    var hand = new Array(one, two, three, four, five);
    var pts = 0;
    for (var i = 0; i < hand.length; i++) {//first card chosen
        for (var l = i + 1; l < hand.length; l++) {//second card chosen
            if (hand[i] == hand[l]) {
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
    var hand = new Array(one, two, three, four, five);
    var pts = 0;
    function sort(one, two, three, four, five) {//sorts cards in ascending order
        hand.sort(function (a, b) { return a - b });
    }
    sort();
    if (((hand[1] - hand[0]) == 1) && ((hand[2] - hand[1]) == 1) && ((hand[3] - hand[2]) == 1) && ((hand[4] - hand[3]) == 1)) {//all five cards in the hand (eg. 1,2,3,4,5)
        pts += 5;
    }
    else if (((((hand[2] - hand[0]) == 1) && ((hand[3] - hand[2]) == 1) && ((hand[4] - hand[3]) == 1)) && (((hand[2] - hand[1]) == 1) && ((hand[3] - hand[2]) == 1) && ((hand[4] - hand[3]) == 1))) || ((((hand[1] - hand[0]) == 1) && ((hand[3] - hand[1]) == 1) && ((hand[4] - hand[3]) == 1)) && (((hand[2] - hand[0]) == 1) && ((hand[3] - hand[2]) == 1) && ((hand[4] - hand[3]) == 1))) || ((((hand[1] - hand[0]) == 1) && ((hand[2] - hand[1]) == 1) && ((hand[4] - hand[2]) == 1)) && ((((hand[1] - hand[0]) == 1) && ((hand[3] - hand[1]) == 1) && ((hand[4] - hand[3]) == 1)))) || ((((hand[1] - hand[0]) == 1) && ((hand[2] - hand[1]) == 1) && ((hand[3] - hand[2]) == 1)) && (((hand[1] - hand[0]) == 1) && ((hand[2] - hand[1]) == 1) && ((hand[4] - hand[2]) == 1)))) {//hands of double four runs (eg. 1,1,2,3,4)
        pts += 8;
    }
    else if ((((hand[2] - hand[0]) == 1) && ((hand[3] - hand[2]) == 1) && ((hand[4] - hand[3]) == 1)) || (((hand[2] - hand[1]) == 1) && ((hand[3] - hand[2]) == 1) && ((hand[4] - hand[3]) == 1)) || (((hand[1] - hand[0]) == 1) && ((hand[3] - hand[1]) == 1) && ((hand[4] - hand[3]) == 1)) || (((hand[1] - hand[0]) == 1) && ((hand[2] - hand[1]) == 1) && ((hand[4] - hand[2]) == 1)) || (((hand[1] - hand[0]) == 1) && ((hand[2] - hand[1]) == 1) && ((hand[3] - hand[2]) == 1))) {//combos of single four runs (eg. 5,6,7,8)
        pts += 4;
    }
    else if ((((hand[1] - hand[0]) == 1) && ((hand[2] - hand[1]) == 1) && ((hand[3] - hand[1]) == 1) && ((hand[4] - hand[1]) == 1)) || (((hand[1] - hand[0]) == 1) && ((hand[4] - hand[1]) == 1) && ((hand[3] - hand[0]) == 1) && ((hand[2] - hand[0]) == 1)) || (((hand[3] - hand[0]) == 1) && ((hand[4] - hand[3]) == 1) && ((hand[3] - hand[1]) == 1) && ((hand[3] - hand[2]) == 1))) {//hand of triple three runs (eg. 4,5,5,5,6)
        pts += 9;
    }
    else if ((((hand[2] - hand[0]) == 1) && ((hand[2] - hand[1]) == 1) && ((hand[3] - hand[0]) == 1) && ((hand[3] - hand[1]) == 1) && ((hand[4] - hand[2]) == 1) && ((hand[4] - hand[3]) == 1)) || (((hand[2] - hand[0]) == 1) && ((hand[2] - hand[1]) == 1) && ((hand[3] - hand[2]) == 1) && ((hand[4] - hand[2]) == 1)) || (((hand[1] - hand[0]) == 1) && ((hand[2] - hand[0]) == 1) && ((hand[3] - hand[1]) == 1) && ((hand[3] - hand[2]) == 1) && ((hand[4] - hand[1]) == 1) && ((hand[4] - hand[2]) == 1))) {//hand of double double three runs (eg. 7,7,8,8,9)
        pts += 12;
    }
    else if ((((hand[2] - hand[0]) == 1) && ((hand[3] - hand[2]) == 1) && ((hand[2] - hand[1]) == 1)) || (((hand[1] - hand[0]) == 1) && ((hand[2] - hand[0]) == 1) && ((hand[3] - hand[1]) == 1) && ((hand[3] - hand[2]) == 1)) || (((hand[1] - hand[0]) == 1) && ((hand[2] - hand[1]) == 1) && ((hand[3] - hand[1]) == 1)) || (((hand[3] - hand[1]) == 1) && ((hand[3] - hand[2]) == 1) && ((hand[4] - hand[3]) == 1)) || (((hand[2] - hand[1]) == 1) && ((hand[3] - hand[1]) == 1) && ((hand[4] - hand[3]) == 1) && ((hand[4] - hand[2]) == 1)) || (((hand[2] - hand[1]) == 1) && ((hand[3] - hand[2]) == 1) && ((hand[4] - hand[2]) == 1))) {//hand of double three runs (eg. 3,3,4,5)
        pts += 6;
    }
    else if ((((hand[1] - hand[0]) == 1) && ((hand[2] - hand[1]) == 1)) || (((hand[2] - hand[1]) == 1) && ((hand[3] - hand[2]) == 1)) || (((hand[3] - hand[2]) == 1) && ((hand[4] - hand[3]) == 1))) {//hand of single three run (eg. J,Q,K)
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
//alert(final);
function score_nibs(one, two, three, four, five) {//scores the 'nibs' points
//nibs is when a player has a jack in their hand who's suit mathes the suit of the 'cut' card
//nibs scores one point
    var hand = new Array(one, two, three, four, five);
    var pts = 0;
    function sort(one, two, three, four, five) {
        hand.sort(function (a, b) { return a - b });//sorts the hand in ascending order
    }
    sort();
    suitCheck(hand[0], hand[1], hand[2], hand[3], hand[4]);//checks the suit of all of the cards in the hand, as well as whether there is a jack or not
    if (((nibSuit == twoSuit) || (nibSuit == threeSuit) || (nibSuit == fourSuit) || (nibSuit == fiveSuit)) && nibSuit == jackSuit) {//if the nibSuit is equal to the jackSuit, score a point
        if (jack == true) {
            pts += 1;
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
    var hand = new Array(one, two, three, four, five);
    var pts = 0;
    function sort(one, two, three, four, five) {
        hand.sort(function (a, b) { return a - b });//sort the hand in ascending order
    }
    sort();
    suitCheck(hand[0], hand[1], hand[2], hand[3], hand[4]);//checks the suit of all of the cards in the hand, as well as whether there is a jack or not
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

var click = 0;//the number of 'clicks' (cards clicked)
var cut = true;//whether the card selected is the cut card (always the first card here)
cutCheck();
var hand = new Array();//the hand
var yourHand = new Array();//your hand (the one that's shown)
var yourSuit;
var pastScores = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);//the past 10 scores
var numHands = 0;//the number of hands played
var firstSuit;
var secondSuit;
var thirdSuit;
var fourthSuit;
var fifthSuit;
var cheat = new Array("Don't do that!", "Stop cheating!", "How can you sleep, knowing you've cheated?", "No comment.", "Hey. That's illegal.", "bad", "Go straight to jail. Do not pass go, do not collect $200", "Error 404 Page Not Found", "Please try again.", "Wrong");//anti-cheating lines
var cheatImage = new Array("url('images/bad.png')", "url('images/no.jpg')");//anti-cheating photos
function compute() {//computes the amount of points scored
    numHands++;
    showHand(yourHand[0], yourHand[1], yourHand[2], yourHand[3], yourHand[4]);
    getYourHand();//show your hand
    sameCard();//checks to see if you clicked the same card more than once (that's cheating!)
    //these scoring ways need J,Q,K to equal 11,12,13 respectively
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
    score_flush(hand[0], hand[1], hand[2], hand[3], hand[4]);
    getPastScores();//shows the past 10 hands
    getAverage();//shows the average score from the past 10 hands
    //these just say what is being scored (eg. nibs), without any value
    document.getElementById('results1').style.display =  'inline-block';
    document.getElementById('results2').style.display =  'inline-block';
    document.getElementById('results3').style.display =  'inline-block';
    document.getElementById('results4').style.display =  'inline-block';
    document.getElementById('results5').style.display =  'inline-block';
    document.getElementById('results6').style.display =  'inline-block';
    document.getElementById('results7').style.display =  'inline-block';
    document.getElementById('results8').style.display =  'inline-block';
    //these contain the actual value of what is being scored
    document.getElementById('nibs').innerHTML =  + nibs + ' points!';
    document.getElementById('pair').innerHTML =  + pair + ' points!';
    document.getElementById('fifteen').innerHTML =  + fifteen + ' points!';
    document.getElementById('flush').innerHTML =  + flush + ' points!';
    document.getElementById('run').innerHTML =  + run + ' points!';
    document.getElementById('score').innerHTML =  + final + ' points!';
    document.getElementById('pastScores').innerHTML = + pastScores[0] + ' points, ' + pastScores[1] + ' points, ' + pastScores[2] + ' points, ' + pastScores[3] + ' points, ' + pastScores[4] + ' points, ' + pastScores[5] + ' points, ' + pastScores[6] + ' points, ' + pastScores[7] + ' points, ' + pastScores[8] + ' points, ' + pastScores[9] + ' points.';
    if (numHands == 1) {//average from past 1 hand
        document.getElementById('average').innerHTML = 'Average Score from Past ' + numHands + ' Hand: ' + average + ' points!';
    }
    else if (numHands > 9) {//average from past 10 hands
        document.getElementById('average').innerHTML = 'Average Score from Past 10 Hands: ' + average + ' points!';
    }
    else {//average from past 2-9 hands
        document.getElementById('average').innerHTML = 'Average Score from Past ' + numHands + ' Hands: ' + average + ' points!';

    }
    cutCheck();
    restart();
}
function one() {//if the card clicked is an ace (one)
    cutCheck();//checks to see if it is the cut
    if (click == 1) {
        hand[0] = 1;//first hand slot (cut)
    }
    else if (click == 2) {
        hand[1] = 1;//second hand slot
    }
    else if (click == 3) {
        hand[2] = 1;//third hand slot
    }
    else if (click == 4) {
        hand[3] = 1;//fourth hand slot
    }
    else if (click == 5) {
        hand[4] = 1;//fifth hand slot
        compute(one, two, three, four, five);//final click happened, so we should count the score now
    }
    suitCheck(hand[0], hand[1], hand[2], hand[3], hand[4]);//what is the suit?
    showHand();//show the hand
    getYourHand();//get the hand
    sameCard();//check for cheaters
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
    suitCheck(hand[0], hand[1], hand[2], hand[3], hand[4]);
    showHand();
    getYourHand();
    sameCard();
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
    suitCheck(hand[0], hand[1], hand[2], hand[3], hand[4]);
    showHand();
    getYourHand();
    sameCard();
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
    suitCheck(hand[0], hand[1], hand[2], hand[3], hand[4]);
    showHand();
    getYourHand();
    sameCard();
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
    suitCheck(hand[0], hand[1], hand[2], hand[3], hand[4]);
    showHand();
    getYourHand();
    sameCard();
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
    suitCheck(hand[0], hand[1], hand[2], hand[3], hand[4]);
    showHand();
    getYourHand();
    sameCard();
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
    suitCheck(hand[0], hand[1], hand[2], hand[3], hand[4]);
    showHand();
    getYourHand();
    sameCard();
}
function eight() {//if the card clicked is an eight
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
    suitCheck(hand[0], hand[1], hand[2], hand[3], hand[4]);
    showHand();
    getYourHand();
    sameCard();
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
    suitCheck(hand[0], hand[1], hand[2], hand[3], hand[4]);
    showHand();
    getYourHand();
    sameCard();
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
    suitCheck(hand[0], hand[1], hand[2], hand[3], hand[4]);
    showHand();
    getYourHand();
    sameCard();
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
    suitCheck(hand[0], hand[1], hand[2], hand[3], hand[4]);
    showHand();
    getYourHand();
    sameCard();
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
    suitCheck(hand[0], hand[1], hand[2], hand[3], hand[4]);
    showHand();
    getYourHand();
    sameCard();
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
    suitCheck(hand[0], hand[1], hand[2], hand[3], hand[4]);
    showHand();
    getYourHand();
    sameCard();
}

//below are ALL of the event lsiteners for all 52 cards. All they do is assign a suit and a value to each card
document.getElementById('d1').addEventListener('click', function (card1) {
    click++;
    suit = "diamond";
    one(one, two, three, four, five);
})
document.getElementById('d2').addEventListener('click', function (card1) {
    click++;
    suit = "diamond";
    two(one, two, three, four, five);
})
document.getElementById('d3').addEventListener('click', function (card1) {
    click++;
    suit = "diamond";
    three(one, two, three, four, five);
})
document.getElementById('d4').addEventListener('click', function (card1) {
    click++;
    suit = "diamond";
    four(one, two, three, four, five);
})
document.getElementById('d5').addEventListener('click', function (card1) {
    click++;
    suit = "diamond";
    five(one, two, three, four, five);
})
document.getElementById('d6').addEventListener('click', function (card1) {
    click++;
    suit = "diamond";
    six(one, two, three, four, five);
})
document.getElementById('d7').addEventListener('click', function (card1) {
    click++;
    suit = "diamond";
    seven(one, two, three, four, five);
})
document.getElementById('d8').addEventListener('click', function (card1) {
    click++;
    suit = "diamond";
    eight(one, two, three, four, five);
})
document.getElementById('d9').addEventListener('click', function (card1) {
    click++;
    suit = "diamond";
    nine(one, two, three, four, five);
})
document.getElementById('d10').addEventListener('click', function (card1) {
    click++;
    suit = "diamond";
    ten(one, two, three, four, five);
})
document.getElementById('d11').addEventListener('click', function (card1) {
    click++;
    suit = "diamond";
    eleven(one, two, three, four, five);
})
document.getElementById('d12').addEventListener('click', function (card1) {
    click++;
    suit = "diamond";
    twelve(one, two, three, four, five);
})
document.getElementById('d13').addEventListener('click', function (card1) {
    click++;
    suit = "diamond";
    thirteen(one, two, three, four, five);
})
document.getElementById('c1').addEventListener('click', function (card1) {
    click++;
    suit = "club";
    one(one, two, three, four, five);
})
document.getElementById('c2').addEventListener('click', function (card1) {
    click++;
    suit = "club";
    two(one, two, three, four, five);
})
document.getElementById('c3').addEventListener('click', function (card1) {
    click++;
    suit = "club";
    three(one, two, three, four, five);
})
document.getElementById('c4').addEventListener('click', function (card1) {
    click++;
    suit = "club";
    four(one, two, three, four, five);
})
document.getElementById('c5').addEventListener('click', function (card1) {
    click++;
    suit = "club";
    five(one, two, three, four, five);
})
document.getElementById('c6').addEventListener('click', function (card1) {
    click++;
    suit = "club";
    six(one, two, three, four, five);
})
document.getElementById('c7').addEventListener('click', function (card1) {
    click++;
    suit = "club";
    seven(one, two, three, four, five);
})
document.getElementById('c8').addEventListener('click', function (card1) {
    click++;
    suit = "club";
    eight(one, two, three, four, five);
})
document.getElementById('c9').addEventListener('click', function (card1) {
    click++;
    suit = "club";
    nine(one, two, three, four, five);
})
document.getElementById('c10').addEventListener('click', function (card1) {
    click++;
    suit = "club";
    ten(one, two, three, four, five);
})
document.getElementById('c11').addEventListener('click', function (card1) {
    click++;
    suit = "club";
    eleven(one, two, three, four, five);
})
document.getElementById('c12').addEventListener('click', function (card1) {
    click++;
    suit = "club";
    twelve(one, two, three, four, five);
})
document.getElementById('c13').addEventListener('click', function (card1) {
    click++;
    suit = "club";
    thirteen(one, two, three, four, five);
})
document.getElementById('h1').addEventListener('click', function (card1) {
    click++;
    suit = "heart";
    one(one, two, three, four, five);
})
document.getElementById('h2').addEventListener('click', function (card1) {
    click++;
    suit = "heart";
    two(one, two, three, four, five);
})
document.getElementById('h3').addEventListener('click', function (card1) {
    click++;
    suit = "heart";
    three(one, two, three, four, five);
})
document.getElementById('h4').addEventListener('click', function (card1) {
    click++;
    suit = "heart";
    four(one, two, three, four, five);
})
document.getElementById('h5').addEventListener('click', function (card1) {
    click++;
    suit = "heart";
    five(one, two, three, four, five);
})
document.getElementById('h6').addEventListener('click', function (card1) {
    click++;
    suit = "heart";
    six(one, two, three, four, five);
})
document.getElementById('h7').addEventListener('click', function (card1) {
    click++;
    suit = "heart";
    seven(one, two, three, four, five);
})
document.getElementById('h8').addEventListener('click', function (card1) {
    click++;
    suit = "heart";
    eight(one, two, three, four, five);
})
document.getElementById('h9').addEventListener('click', function (card1) {
    click++;
    suit = "heart";
    nine(one, two, three, four, five);
})
document.getElementById('h10').addEventListener('click', function (card1) {
    click++;
    suit = "heart";
    ten(one, two, three, four, five);
})
document.getElementById('h11').addEventListener('click', function (card1) {
    click++;
    suit = "heart";
    eleven(one, two, three, four, five);
})
document.getElementById('h12').addEventListener('click', function (card1) {
    click++;
    suit = "heart";
    twelve(one, two, three, four, five);
})
document.getElementById('h13').addEventListener('click', function (card1) {
    click++;
    suit = "heart";
    thirteen(one, two, three, four, five);
})
document.getElementById('s1').addEventListener('click', function (card1) {
    click++;
    suit = "spade";
    one(one, two, three, four, five);
})
document.getElementById('s2').addEventListener('click', function (card1) {
    click++;
    suit = "spade";
    two(one, two, three, four, five);
})
document.getElementById('s3').addEventListener('click', function (card1) {
    click++;
    suit = "spade";
    three(one, two, three, four, five);
})
document.getElementById('s4').addEventListener('click', function (card1) {
    click++;
    suit = "spade";
    four(one, two, three, four, five);
})
document.getElementById('s5').addEventListener('click', function (card1) {
    click++;
    suit = "spade";
    five(one, two, three, four, five);
})
document.getElementById('s6').addEventListener('click', function (card1) {
    click++;
    suit = "spade";
    six(one, two, three, four, five);
})
document.getElementById('s7').addEventListener('click', function (card1) {
    click++;
    suit = "spade";
    seven(one, two, three, four, five);
})
document.getElementById('s8').addEventListener('click', function (card1) {
    click++;
    suit = "spade";
    eight(one, two, three, four, five);
})
document.getElementById('s9').addEventListener('click', function (card1) {
    click++;
    suit = "spade";
    nine(one, two, three, four, five);
})
document.getElementById('s10').addEventListener('click', function (card1) {
    click++;
    suit = "spade";
    ten(one, two, three, four, five);
})
document.getElementById('s11').addEventListener('click', function (card1) {
    click++;
    suit = "spade";
    eleven(one, two, three, four, five);
})
document.getElementById('s12').addEventListener('click', function (card1) {
    click++;
    suit = "spade";
    twelve(one, two, three, four, five);
})
document.getElementById('s13').addEventListener('click', function (card1) {
    click++;
    suit = "spade";
    thirteen(one, two, three, four, five);
})

function cutCheck() {//checks whether the card you clicked will be the cut card or not
    if (click == 0) {
        cut = true;
        document.getElementById('text').innerHTML = 'Please choose the cut card';//gives instructions to the player
    }
    else if (click < 5) {
        if (click == 1) {
            document.getElementById('text').innerHTML = 'Please choose 4 more cards';//gives instructions to the player
        }
        else if (click == 2) {
            document.getElementById('text').innerHTML = 'Please choose 3 more cards';//gives instructions to the player
        }
        else if (click == 3) {
            document.getElementById('text').innerHTML = 'Please choose 2 more cards';//gives instructions to the player
        }
        else if (click == 4) {
            document.getElementById('text').innerHTML = 'Please choose 1 more card';//gives instructions to the player
        }
        cut = false;
    }
    else {
        document.getElementById('text').innerHTML = 'You got ' + final + ' points! Click the button below to restart!';//gives instructions to the player
        document.getElementById('ok').style.display = 'block';//shows the reset button
    }
}
document.getElementById('ok').addEventListener('click', function (restart) {//the event listener for the reset button
    //resets all of the values, cards, and text instructions
    document.getElementById('text').innerHTML = 'Please choose the cut card';
    document.getElementById('ok').style.display = 'none';
    click = 0;
    final = 0;
    nibSuit = 'nothing';
    twoSuit = 'nothingStill';
    threeSuit = 'nothingCool';
    fourSuit = 'nothingYep';
    fiveSuit = 'nothingOnceAgain';
    jackSuit = 'nothingYeet';
    document.getElementById('y1').src = 'images/questionCard.png';
    document.getElementById('y2').src = 'images/questionCard.png';
    document.getElementById('y3').src = 'images/questionCard.png';
    document.getElementById('y4').src = 'images/questionCard.png';
    document.getElementById('y5').src = 'images/questionCard.png';
})
function suitCheck() {//checks the suit of each card, as well as if there is a jack
    if (click == 1) {
        nibSuit = suit;//the nibSuit (the suit of the cut card) is the suit of the first card clicked
        if (hand[0] == 11) {//if the card is a jack
            jack = true;
            jackSuit = 'idc';//this is so nibs can't happen if the cut card is a jack
        }
    }
    else if (click == 2) {
        twoSuit = suit;//the twoSuit is the suit of the second card clicked
        if (hand[1] == 11) {
            jack = true;
            jackSuit = suit;//if the card is a jack, make jackSuit the suit of this card
            if (jackSuit != nibSuit){//if the suit of the jack does not match the suit of the cut card
                jackSuit = "nothing";//then change the suit of the Jack to something else, as this won't get you nibs
            }
        }
    }
    else if (click == 3) {
        threeSuit = suit;//the threeSuit is the suit of the third card clicked
        if (hand[2] == 11) {
            jack = true;
            if (jackSuit == nibSuit){//if there is already a jack with the same suit as the cut card, then do nothing (as we can count nibs now)
                jackSuit = jackSuit;
            }
            else if (jackSuit != nibSuit){//if there's not nibs yet, then try the suit of THIS jack
                jackSuit = suit;
            }
        }
    }
    else if (click == 4) {//the fourSuit is the suit of the fourth card clicked
        fourSuit = suit;
        if (hand[3] == 11) {
            jack = true;
            if (jackSuit == nibSuit){//if there is already a jack with the same suit as the cut card, then do nothing (as we can count nibs now)
                jackSuit = jackSuit;
            }
            else if (jackSuit != nibSuit){//if there's not nibs yet, then try the suit of THIS jack
                jackSuit = suit;
            }
        }
    }
    else if (click == 5) {//the fiveSuit is the suit of the fifth card clicked
        fiveSuit = suit;
        if (hand[4] == 11) {
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
function showHand() {//makes the cards you clicked go into your hand
    if (click == 1) {
        yourHand[0] = hand[0];
        yourSuit = suit;
    }
    else if (click == 2) {
        yourHand[1] = hand[1];
        yourSuit = suit;
    }
    else if (click == 3) {
        yourHand[2] = hand[2];
        yourSuit = suit;
    }
    else if (click == 4) {
        yourHand[3] = hand[3];
        yourSuit = suit;
    }
    else if (click == 5) {
        yourHand[4] = hand[4];
        yourSuit = suit;
    }
}
function getYourHand() {
    //this shows your cards on the screen
    if (click == 1) {//first card
        if (yourSuit == 'diamond') {
            if (yourHand[0] == 1) {
                document.getElementById('y1').src = 'images/aceDiamonds.png';
            }
            else if (yourHand[0] == 2) {
                document.getElementById('y1').src = 'images/twoDiamonds.png';
            }
            else if (yourHand[0] == 3) {
                document.getElementById('y1').src = 'images/threeDiamonds.png';
            }
            else if (yourHand[0] == 4) {
                document.getElementById('y1').src = 'images/fourDiamonds.png';
            }
            else if (yourHand[0] == 5) {
                document.getElementById('y1').src = 'images/fiveDiamonds.png';
            }
            else if (yourHand[0] == 6) {
                document.getElementById('y1').src = 'images/sixDiamonds.png';
            }
            else if (yourHand[0] == 7) {
                document.getElementById('y1').src = 'images/sevenDiamonds.png';
            }
            else if (yourHand[0] == 8) {
                document.getElementById('y1').src = 'images/eightDiamonds.png';
            }
            else if (yourHand[0] == 9) {
                document.getElementById('y1').src = 'images/nineDiamonds.png';
            }
            else if (yourHand[0] == 10) {
                document.getElementById('y1').src = 'images/tenDiamonds.png';
            }
            else if (yourHand[0] == 11) {
                document.getElementById('y1').src = 'images/jackDiamonds.png';
            }
            else if (yourHand[0] == 12) {
                document.getElementById('y1').src = 'images/queenDiamonds.png';
            }
            else if (yourHand[0] == 13) {
                document.getElementById('y1').src = 'images/kingDiamonds.png';
            }
        }
        else if (yourSuit == 'club') {
            if (yourHand[0] == 1) {
                document.getElementById('y1').src = 'images/aceClub.png';
            }
            else if (yourHand[0] == 2) {
                document.getElementById('y1').src = 'images/twoClub.png';
            }
            else if (yourHand[0] == 3) {
                document.getElementById('y1').src = 'images/threeClub.png';
            }
            else if (yourHand[0] == 4) {
                document.getElementById('y1').src = 'images/fourClub.png';
            }
            else if (yourHand[0] == 5) {
                document.getElementById('y1').src = 'images/fiveClub.png';
            }
            else if (yourHand[0] == 6) {
                document.getElementById('y1').src = 'images/sixClub.png';
            }
            else if (yourHand[0] == 7) {
                document.getElementById('y1').src = 'images/sevenClub.png';
            }
            else if (yourHand[0] == 8) {
                document.getElementById('y1').src = 'images/eightClub.png';
            }
            else if (yourHand[0] == 9) {
                document.getElementById('y1').src = 'images/nineClub.png';
            }
            else if (yourHand[0] == 10) {
                document.getElementById('y1').src = 'images/tenClub.png';
            }
            else if (yourHand[0] == 11) {
                document.getElementById('y1').src = 'images/jackClub.png';
            }
            else if (yourHand[0] == 12) {
                document.getElementById('y1').src = 'images/queenClub.png';
            }
            else if (yourHand[0] == 13) {
                document.getElementById('y1').src = 'images/kingClub.png';
            }
        }
        else if (yourSuit == 'heart') {
            if (yourHand[0] == 1) {
                document.getElementById('y1').src = 'images/aceHearts.png';
            }
            else if (yourHand[0] == 2) {
                document.getElementById('y1').src = 'images/twoHearts.png';
            }
            else if (yourHand[0] == 3) {
                document.getElementById('y1').src = 'images/threeHearts.png';
            }
            else if (yourHand[0] == 4) {
                document.getElementById('y1').src = 'images/fourHearts.png';
            }
            else if (yourHand[0] == 5) {
                document.getElementById('y1').src = 'images/fiveHearts.png';
            }
            else if (yourHand[0] == 6) {
                document.getElementById('y1').src = 'images/sixHearts.png';
            }
            else if (yourHand[0] == 7) {
                document.getElementById('y1').src = 'images/sevenHearts.png';
            }
            else if (yourHand[0] == 8) {
                document.getElementById('y1').src = 'images/eightHearts.png';
            }
            else if (yourHand[0] == 9) {
                document.getElementById('y1').src = 'images/nineHearts.png';
            }
            else if (yourHand[0] == 10) {
                document.getElementById('y1').src = 'images/tenHearts.png';
            }
            else if (yourHand[0] == 11) {
                document.getElementById('y1').src = 'images/jackHearts.png';
            }
            else if (yourHand[0] == 12) {
                document.getElementById('y1').src = 'images/queenHearts.png';
            }
            else if (yourHand[0] == 13) {
                document.getElementById('y1').src = 'images/kingHearts.png';
            }
        }
        else if (yourSuit == 'spade') {
            if (yourHand[0] == 1) {
                document.getElementById('y1').src = 'images/aceSpades.png';
            }
            else if (yourHand[0] == 2) {
                document.getElementById('y1').src = 'images/twoSpades.png';
            }
            else if (yourHand[0] == 3) {
                document.getElementById('y1').src = 'images/threeSpades.png';
            }
            else if (yourHand[0] == 4) {
                document.getElementById('y1').src = 'images/fourSpades.png';
            }
            else if (yourHand[0] == 5) {
                document.getElementById('y1').src = 'images/fiveSpades.png';
            }
            else if (yourHand[0] == 6) {
                document.getElementById('y1').src = 'images/sixSpades.png';
            }
            else if (yourHand[0] == 7) {
                document.getElementById('y1').src = 'images/sevenSpades.png';
            }
            else if (yourHand[0] == 8) {
                document.getElementById('y1').src = 'images/eightSpades.png';
            }
            else if (yourHand[0] == 9) {
                document.getElementById('y1').src = 'images/nineSpades.png';
            }
            else if (yourHand[0] == 10) {
                document.getElementById('y1').src = 'images/tenSpades.png';
            }
            else if (yourHand[0] == 11) {
                document.getElementById('y1').src = 'images/jackSpades.png';
            }
            else if (yourHand[0] == 12) {
                document.getElementById('y1').src = 'images/queenSpades.png';
            }
            else if (yourHand[0] == 13) {
                document.getElementById('y1').src = 'images/kingSpades.png';
            }
        }
    }
    else if (click == 2) {//second card
        if (yourSuit == 'diamond') {
            if (yourHand[1] == 1) {
                document.getElementById('y2').src = 'images/aceDiamonds.png';
            }
            else if (yourHand[1] == 2) {
                document.getElementById('y2').src = 'images/twoDiamonds.png';
            }
            else if (yourHand[1] == 3) {
                document.getElementById('y2').src = 'images/threeDiamonds.png';
            }
            else if (yourHand[1] == 4) {
                document.getElementById('y2').src = 'images/fourDiamonds.png';
            }
            else if (yourHand[1] == 5) {
                document.getElementById('y2').src = 'images/fiveDiamonds.png';
            }
            else if (yourHand[1] == 6) {
                document.getElementById('y2').src = 'images/sixDiamonds.png';
            }
            else if (yourHand[1] == 7) {
                document.getElementById('y2').src = 'images/sevenDiamonds.png';
            }
            else if (yourHand[1] == 8) {
                document.getElementById('y2').src = 'images/eightDiamonds.png';
            }
            else if (yourHand[1] == 9) {
                document.getElementById('y2').src = 'images/nineDiamonds.png';
            }
            else if (yourHand[1] == 10) {
                document.getElementById('y2').src = 'images/tenDiamonds.png';
            }
            else if (yourHand[1] == 11) {
                document.getElementById('y2').src = 'images/jackDiamonds.png';
            }
            else if (yourHand[1] == 12) {
                document.getElementById('y2').src = 'images/queenDiamonds.png';
            }
            else if (yourHand[1] == 13) {
                document.getElementById('y2').src = 'images/kingDiamonds.png';
            }
        }
        else if (yourSuit == 'club') {
            if (yourHand[1] == 1) {
                document.getElementById('y2').src = 'images/aceClub.png';
            }
            else if (yourHand[1] == 2) {
                document.getElementById('y2').src = 'images/twoClub.png';
            }
            else if (yourHand[1] == 3) {
                document.getElementById('y2').src = 'images/threeClub.png';
            }
            else if (yourHand[1] == 4) {
                document.getElementById('y2').src = 'images/fourClub.png';
            }
            else if (yourHand[1] == 5) {
                document.getElementById('y2').src = 'images/fiveClub.png';
            }
            else if (yourHand[1] == 6) {
                document.getElementById('y2').src = 'images/sixClub.png';
            }
            else if (yourHand[1] == 7) {
                document.getElementById('y2').src = 'images/sevenClub.png';
            }
            else if (yourHand[1] == 8) {
                document.getElementById('y2').src = 'images/eightClub.png';
            }
            else if (yourHand[1] == 9) {
                document.getElementById('y2').src = 'images/nineClub.png';
            }
            else if (yourHand[1] == 10) {
                document.getElementById('y2').src = 'images/tenClub.png';
            }
            else if (yourHand[1] == 11) {
                document.getElementById('y2').src = 'images/jackClub.png';
            }
            else if (yourHand[1] == 12) {
                document.getElementById('y2').src = 'images/queenClub.png';
            }
            else if (yourHand[1] == 13) {
                document.getElementById('y2').src = 'images/kingClub.png';
            }
        }
        else if (yourSuit == 'heart') {
            if (yourHand[1] == 1) {
                document.getElementById('y2').src = 'images/aceHearts.png';
            }
            else if (yourHand[1] == 2) {
                document.getElementById('y2').src = 'images/twoHearts.png';
            }
            else if (yourHand[1] == 3) {
                document.getElementById('y2').src = 'images/threeHearts.png';
            }
            else if (yourHand[1] == 4) {
                document.getElementById('y2').src = 'images/fourHearts.png';
            }
            else if (yourHand[1] == 5) {
                document.getElementById('y2').src = 'images/fiveHearts.png';
            }
            else if (yourHand[1] == 6) {
                document.getElementById('y2').src = 'images/sixHearts.png';
            }
            else if (yourHand[1] == 7) {
                document.getElementById('y2').src = 'images/sevenHearts.png';
            }
            else if (yourHand[1] == 8) {
                document.getElementById('y2').src = 'images/eightHearts.png';
            }
            else if (yourHand[1] == 9) {
                document.getElementById('y2').src = 'images/nineHearts.png';
            }
            else if (yourHand[1] == 10) {
                document.getElementById('y2').src = 'images/tenHearts.png';
            }
            else if (yourHand[1] == 11) {
                document.getElementById('y2').src = 'images/jackHearts.png';
            }
            else if (yourHand[1] == 12) {
                document.getElementById('y2').src = 'images/queenHearts.png';
            }
            else if (yourHand[1] == 13) {
                document.getElementById('y2').src = 'images/kingHearts.png';
            }
        }
        else if (yourSuit == 'spade') {
            if (yourHand[1] == 1) {
                document.getElementById('y2').src = 'images/aceSpades.png';
            }
            else if (yourHand[1] == 2) {
                document.getElementById('y2').src = 'images/twoSpades.png';
            }
            else if (yourHand[1] == 3) {
                document.getElementById('y2').src = 'images/threeSpades.png';
            }
            else if (yourHand[1] == 4) {
                document.getElementById('y2').src = 'images/fourSpades.png';
            }
            else if (yourHand[1] == 5) {
                document.getElementById('y2').src = 'images/fiveSpades.png';
            }
            else if (yourHand[1] == 6) {
                document.getElementById('y2').src = 'images/sixSpades.png';
            }
            else if (yourHand[1] == 7) {
                document.getElementById('y2').src = 'images/sevenSpades.png';
            }
            else if (yourHand[1] == 8) {
                document.getElementById('y2').src = 'images/eightSpades.png';
            }
            else if (yourHand[1] == 9) {
                document.getElementById('y2').src = 'images/nineSpades.png';
            }
            else if (yourHand[1] == 10) {
                document.getElementById('y2').src = 'images/tenSpades.png';
            }
            else if (yourHand[1] == 11) {
                document.getElementById('y2').src = 'images/jackSpades.png';
            }
            else if (yourHand[1] == 12) {
                document.getElementById('y2').src = 'images/queenSpades.png';
            }
            else if (yourHand[1] == 13) {
                document.getElementById('y2').src = 'images/kingSpades.png';
            }
        }
    }
    else if (click == 3) {//third card
        if (yourSuit == 'diamond') {
            if (yourHand[2] == 1) {
                document.getElementById('y3').src = 'images/aceDiamonds.png';
            }
            else if (yourHand[2] == 2) {
                document.getElementById('y3').src = 'images/twoDiamonds.png';
            }
            else if (yourHand[2] == 3) {
                document.getElementById('y3').src = 'images/threeDiamonds.png';
            }
            else if (yourHand[2] == 4) {
                document.getElementById('y3').src = 'images/fourDiamonds.png';
            }
            else if (yourHand[2] == 5) {
                document.getElementById('y3').src = 'images/fiveDiamonds.png';
            }
            else if (yourHand[2] == 6) {
                document.getElementById('y3').src = 'images/sixDiamonds.png';
            }
            else if (yourHand[2] == 7) {
                document.getElementById('y3').src = 'images/sevenDiamonds.png';
            }
            else if (yourHand[2] == 8) {
                document.getElementById('y3').src = 'images/eightDiamonds.png';
            }
            else if (yourHand[2] == 9) {
                document.getElementById('y3').src = 'images/nineDiamonds.png';
            }
            else if (yourHand[2] == 10) {
                document.getElementById('y3').src = 'images/tenDiamonds.png';
            }
            else if (yourHand[2] == 11) {
                document.getElementById('y3').src = 'images/jackDiamonds.png';
            }
            else if (yourHand[2] == 12) {
                document.getElementById('y3').src = 'images/queenDiamonds.png';
            }
            else if (yourHand[2] == 13) {
                document.getElementById('y3').src = 'images/kingDiamonds.png';
            }
        }
        else if (yourSuit == 'club') {
            if (yourHand[2] == 1) {
                document.getElementById('y3').src = 'images/aceClub.png';
            }
            else if (yourHand[2] == 2) {
                document.getElementById('y3').src = 'images/twoClub.png';
            }
            else if (yourHand[2] == 3) {
                document.getElementById('y3').src = 'images/threeClub.png';
            }
            else if (yourHand[2] == 4) {
                document.getElementById('y3').src = 'images/fourClub.png';
            }
            else if (yourHand[2] == 5) {
                document.getElementById('y3').src = 'images/fiveClub.png';
            }
            else if (yourHand[2] == 6) {
                document.getElementById('y3').src = 'images/sixClub.png';
            }
            else if (yourHand[2] == 7) {
                document.getElementById('y3').src = 'images/sevenClub.png';
            }
            else if (yourHand[2] == 8) {
                document.getElementById('y3').src = 'images/eightClub.png';
            }
            else if (yourHand[2] == 9) {
                document.getElementById('y3').src = 'images/nineClub.png';
            }
            else if (yourHand[2] == 10) {
                document.getElementById('y3').src = 'images/tenClub.png';
            }
            else if (yourHand[2] == 11) {
                document.getElementById('y3').src = 'images/jackClub.png';
            }
            else if (yourHand[2] == 12) {
                document.getElementById('y3').src = 'images/queenClub.png';
            }
            else if (yourHand[2] == 13) {
                document.getElementById('y3').src = 'images/kingClub.png';
            }
        }
        else if (yourSuit == 'heart') {
            if (yourHand[2] == 1) {
                document.getElementById('y3').src = 'images/aceHearts.png';
            }
            else if (yourHand[2] == 2) {
                document.getElementById('y3').src = 'images/twoHearts.png';
            }
            else if (yourHand[2] == 3) {
                document.getElementById('y3').src = 'images/threeHearts.png';
            }
            else if (yourHand[2] == 4) {
                document.getElementById('y3').src = 'images/fourHearts.png';
            }
            else if (yourHand[2] == 5) {
                document.getElementById('y3').src = 'images/fiveHearts.png';
            }
            else if (yourHand[2] == 6) {
                document.getElementById('y3').src = 'images/sixHearts.png';
            }
            else if (yourHand[2] == 7) {
                document.getElementById('y3').src = 'images/sevenHearts.png';
            }
            else if (yourHand[2] == 8) {
                document.getElementById('y3').src = 'images/eightHearts.png';
            }
            else if (yourHand[2] == 9) {
                document.getElementById('y3').src = 'images/nineHearts.png';
            }
            else if (yourHand[2] == 10) {
                document.getElementById('y3').src = 'images/tenHearts.png';
            }
            else if (yourHand[2] == 11) {
                document.getElementById('y3').src = 'images/jackHearts.png';
            }
            else if (yourHand[2] == 12) {
                document.getElementById('y3').src = 'images/queenHearts.png';
            }
            else if (yourHand[2] == 13) {
                document.getElementById('y3').src = 'images/kingHearts.png';
            }
        }
        else if (yourSuit == 'spade') {
            if (yourHand[2] == 1) {
                document.getElementById('y3').src = 'images/aceSpades.png';
            }
            else if (yourHand[2] == 2) {
                document.getElementById('y3').src = 'images/twoSpades.png';
            }
            else if (yourHand[2] == 3) {
                document.getElementById('y3').src = 'images/threeSpades.png';
            }
            else if (yourHand[2] == 4) {
                document.getElementById('y3').src = 'images/fourSpades.png';
            }
            else if (yourHand[2] == 5) {
                document.getElementById('y3').src = 'images/fiveSpades.png';
            }
            else if (yourHand[2] == 6) {
                document.getElementById('y3').src = 'images/sixSpades.png';
            }
            else if (yourHand[2] == 7) {
                document.getElementById('y3').src = 'images/sevenSpades.png';
            }
            else if (yourHand[2] == 8) {
                document.getElementById('y3').src = 'images/eightSpades.png';
            }
            else if (yourHand[2] == 9) {
                document.getElementById('y3').src = 'images/nineSpades.png';
            }
            else if (yourHand[2] == 10) {
                document.getElementById('y3').src = 'images/tenSpades.png';
            }
            else if (yourHand[2] == 11) {
                document.getElementById('y3').src = 'images/jackSpades.png';
            }
            else if (yourHand[2] == 12) {
                document.getElementById('y3').src = 'images/queenSpades.png';
            }
            else if (yourHand[2] == 13) {
                document.getElementById('y3').src = 'images/kingSpades.png';
            }
        }
    }
    else if (click == 4) {//fourth card
        if (yourSuit == 'diamond') {
            if (yourHand[3] == 1) {
                document.getElementById('y4').src = 'images/aceDiamonds.png';
            }
            else if (yourHand[3] == 2) {
                document.getElementById('y4').src = 'images/twoDiamonds.png';
            }
            else if (yourHand[3] == 3) {
                document.getElementById('y4').src = 'images/threeDiamonds.png';
            }
            else if (yourHand[3] == 4) {
                document.getElementById('y4').src = 'images/fourDiamonds.png';
            }
            else if (yourHand[3] == 5) {
                document.getElementById('y4').src = 'images/fiveDiamonds.png';
            }
            else if (yourHand[3] == 6) {
                document.getElementById('y4').src = 'images/sixDiamonds.png';
            }
            else if (yourHand[3] == 7) {
                document.getElementById('y4').src = 'images/sevenDiamonds.png';
            }
            else if (yourHand[3] == 8) {
                document.getElementById('y4').src = 'images/eightDiamonds.png';
            }
            else if (yourHand[3] == 9) {
                document.getElementById('y4').src = 'images/nineDiamonds.png';
            }
            else if (yourHand[3] == 10) {
                document.getElementById('y4').src = 'images/tenDiamonds.png';
            }
            else if (yourHand[3] == 11) {
                document.getElementById('y4').src = 'images/jackDiamonds.png';
            }
            else if (yourHand[3] == 12) {
                document.getElementById('y4').src = 'images/queenDiamonds.png';
            }
            else if (yourHand[3] == 13) {
                document.getElementById('y4').src = 'images/kingDiamonds.png';
            }
        }
        else if (yourSuit == 'club') {
            if (yourHand[3] == 1) {
                document.getElementById('y4').src = 'images/aceClub.png';
            }
            else if (yourHand[3] == 2) {
                document.getElementById('y4').src = 'images/twoClub.png';
            }
            else if (yourHand[3] == 3) {
                document.getElementById('y4').src = 'images/threeClub.png';
            }
            else if (yourHand[3] == 4) {
                document.getElementById('y4').src = 'images/fourClub.png';
            }
            else if (yourHand[3] == 5) {
                document.getElementById('y4').src = 'images/fiveClub.png';
            }
            else if (yourHand[3] == 6) {
                document.getElementById('y4').src = 'images/sixClub.png';
            }
            else if (yourHand[3] == 7) {
                document.getElementById('y4').src = 'images/sevenClub.png';
            }
            else if (yourHand[3] == 8) {
                document.getElementById('y4').src = 'images/eightClub.png';
            }
            else if (yourHand[3] == 9) {
                document.getElementById('y4').src = 'images/nineClub.png';
            }
            else if (yourHand[3] == 10) {
                document.getElementById('y4').src = 'images/tenClub.png';
            }
            else if (yourHand[3] == 11) {
                document.getElementById('y4').src = 'images/jackClub.png';
            }
            else if (yourHand[3] == 12) {
                document.getElementById('y4').src = 'images/queenClub.png';
            }
            else if (yourHand[3] == 13) {
                document.getElementById('y4').src = 'images/kingClub.png';
            }
        }
        else if (yourSuit == 'heart') {
            if (yourHand[3] == 1) {
                document.getElementById('y4').src = 'images/aceHearts.png';
            }
            else if (yourHand[3] == 2) {
                document.getElementById('y4').src = 'images/twoHearts.png';
            }
            else if (yourHand[3] == 3) {
                document.getElementById('y4').src = 'images/threeHearts.png';
            }
            else if (yourHand[3] == 4) {
                document.getElementById('y4').src = 'images/fourHearts.png';
            }
            else if (yourHand[3] == 5) {
                document.getElementById('y4').src = 'images/fiveHearts.png';
            }
            else if (yourHand[3] == 6) {
                document.getElementById('y4').src = 'images/sixHearts.png';
            }
            else if (yourHand[3] == 7) {
                document.getElementById('y4').src = 'images/sevenHearts.png';
            }
            else if (yourHand[3] == 8) {
                document.getElementById('y4').src = 'images/eightHearts.png';
            }
            else if (yourHand[3] == 9) {
                document.getElementById('y4').src = 'images/nineHearts.png';
            }
            else if (yourHand[3] == 10) {
                document.getElementById('y4').src = 'images/tenHearts.png';
            }
            else if (yourHand[3] == 11) {
                document.getElementById('y4').src = 'images/jackHearts.png';
            }
            else if (yourHand[3] == 12) {
                document.getElementById('y4').src = 'images/queenHearts.png';
            }
            else if (yourHand[3] == 13) {
                document.getElementById('y4').src = 'images/kingHearts.png';
            }
        }
        else if (yourSuit == 'spade') {
            if (yourHand[3] == 1) {
                document.getElementById('y4').src = 'images/aceSpades.png';
            }
            else if (yourHand[3] == 2) {
                document.getElementById('y4').src = 'images/twoSpades.png';
            }
            else if (yourHand[3] == 3) {
                document.getElementById('y4').src = 'images/threeSpades.png';
            }
            else if (yourHand[3] == 4) {
                document.getElementById('y4').src = 'images/fourSpades.png';
            }
            else if (yourHand[3] == 5) {
                document.getElementById('y4').src = 'images/fiveSpades.png';
            }
            else if (yourHand[3] == 6) {
                document.getElementById('y4').src = 'images/sixSpades.png';
            }
            else if (yourHand[3] == 7) {
                document.getElementById('y4').src = 'images/sevenSpades.png';
            }
            else if (yourHand[3] == 8) {
                document.getElementById('y4').src = 'images/eightSpades.png';
            }
            else if (yourHand[3] == 9) {
                document.getElementById('y4').src = 'images/nineSpades.png';
            }
            else if (yourHand[3] == 10) {
                document.getElementById('y4').src = 'images/tenSpades.png';
            }
            else if (yourHand[3] == 11) {
                document.getElementById('y4').src = 'images/jackSpades.png';
            }
            else if (yourHand[3] == 12) {
                document.getElementById('y4').src = 'images/queenSpades.png';
            }
            else if (yourHand[3] == 13) {
                document.getElementById('y4').src = 'images/kingSpades.png';
            }
        }
    }
    else if (click == 5) {//fifth card
        if (yourSuit == 'diamond') {
            if (yourHand[4] == 1) {
                document.getElementById('y5').src = 'images/aceDiamonds.png';
            }
            else if (yourHand[4] == 2) {
                document.getElementById('y5').src = 'images/twoDiamonds.png';
            }
            else if (yourHand[4] == 3) {
                document.getElementById('y5').src = 'images/threeDiamonds.png';
            }
            else if (yourHand[4] == 4) {
                document.getElementById('y5').src = 'images/fourDiamonds.png';
            }
            else if (yourHand[4] == 5) {
                document.getElementById('y5').src = 'images/fiveDiamonds.png';
            }
            else if (yourHand[4] == 6) {
                document.getElementById('y5').src = 'images/sixDiamonds.png';
            }
            else if (yourHand[4] == 7) {
                document.getElementById('y5').src = 'images/sevenDiamonds.png';
            }
            else if (yourHand[4] == 8) {
                document.getElementById('y5').src = 'images/eightDiamonds.png';
            }
            else if (yourHand[4] == 9) {
                document.getElementById('y5').src = 'images/nineDiamonds.png';
            }
            else if (yourHand[4] == 10) {
                document.getElementById('y5').src = 'images/tenDiamonds.png';
            }
            else if (yourHand[4] == 11) {
                document.getElementById('y5').src = 'images/jackDiamonds.png';
            }
            else if (yourHand[4] == 12) {
                document.getElementById('y5').src = 'images/queenDiamonds.png';
            }
            else if (yourHand[4] == 13) {
                document.getElementById('y5').src = 'images/kingDiamonds.png';
            }
        }
        else if (yourSuit == 'club') {
            if (yourHand[4] == 1) {
                document.getElementById('y5').src = 'images/aceClub.png';
            }
            else if (yourHand[4] == 2) {
                document.getElementById('y5').src = 'images/twoClub.png';
            }
            else if (yourHand[4] == 3) {
                document.getElementById('y5').src = 'images/threeClub.png';
            }
            else if (yourHand[4] == 4) {
                document.getElementById('y5').src = 'images/fourClub.png';
            }
            else if (yourHand[4] == 5) {
                document.getElementById('y5').src = 'images/fiveClub.png';
            }
            else if (yourHand[4] == 6) {
                document.getElementById('y5').src = 'images/sixClub.png';
            }
            else if (yourHand[4] == 7) {
                document.getElementById('y5').src = 'images/sevenClub.png';
            }
            else if (yourHand[4] == 8) {
                document.getElementById('y5').src = 'images/eightClub.png';
            }
            else if (yourHand[4] == 9) {
                document.getElementById('y5').src = 'images/nineClub.png';
            }
            else if (yourHand[4] == 10) {
                document.getElementById('y5').src = 'images/tenClub.png';
            }
            else if (yourHand[4] == 11) {
                document.getElementById('y5').src = 'images/jackClub.png';
            }
            else if (yourHand[4] == 12) {
                document.getElementById('y5').src = 'images/queenClub.png';
            }
            else if (yourHand[4] == 13) {
                document.getElementById('y5').src = 'images/kingClub.png';
            }
        }
        else if (yourSuit == 'heart') {
            if (yourHand[4] == 1) {
                document.getElementById('y5').src = 'images/aceHearts.png';
            }
            else if (yourHand[4] == 2) {
                document.getElementById('y5').src = 'images/twoHearts.png';
            }
            else if (yourHand[4] == 3) {
                document.getElementById('y5').src = 'images/threeHearts.png';
            }
            else if (yourHand[4] == 4) {
                document.getElementById('y5').src = 'images/fourHearts.png';
            }
            else if (yourHand[4] == 5) {
                document.getElementById('y5').src = 'images/fiveHearts.png';
            }
            else if (yourHand[4] == 6) {
                document.getElementById('y5').src = 'images/sixHearts.png';
            }
            else if (yourHand[4] == 7) {
                document.getElementById('y5').src = 'images/sevenHearts.png';
            }
            else if (yourHand[4] == 8) {
                document.getElementById('y5').src = 'images/eightHearts.png';
            }
            else if (yourHand[4] == 9) {
                document.getElementById('y5').src = 'images/nineHearts.png';
            }
            else if (yourHand[4] == 10) {
                document.getElementById('y5').src = 'images/tenHearts.png';
            }
            else if (yourHand[4] == 11) {
                document.getElementById('y5').src = 'images/jackHearts.png';
            }
            else if (yourHand[4] == 12) {
                document.getElementById('y5').src = 'images/queenHearts.png';
            }
            else if (yourHand[4] == 13) {
                document.getElementById('y5').src = 'images/kingHearts.png';
            }
        }
        else if (yourSuit == 'spade') {
            if (yourHand[4] == 1) {
                document.getElementById('y5').src = 'images/aceSpades.png';
            }
            else if (yourHand[4] == 2) {
                document.getElementById('y5').src = 'images/twoSpades.png';
            }
            else if (yourHand[4] == 3) {
                document.getElementById('y5').src = 'images/threeSpades.png';
            }
            else if (yourHand[4] == 4) {
                document.getElementById('y5').src = 'images/fourSpades.png';
            }
            else if (yourHand[4] == 5) {
                document.getElementById('y5').src = 'images/fiveSpades.png';
            }
            else if (yourHand[4] == 6) {
                document.getElementById('y5').src = 'images/sixSpades.png';
            }
            else if (yourHand[4] == 7) {
                document.getElementById('y5').src = 'images/sevenSpades.png';
            }
            else if (yourHand[4] == 8) {
                document.getElementById('y5').src = 'images/eightSpades.png';
            }
            else if (yourHand[4] == 9) {
                document.getElementById('y5').src = 'images/nineSpades.png';
            }
            else if (yourHand[4] == 10) {
                document.getElementById('y5').src = 'images/tenSpades.png';
            }
            else if (yourHand[4] == 11) {
                document.getElementById('y5').src = 'images/jackSpades.png';
            }
            else if (yourHand[4] == 12) {
                document.getElementById('y5').src = 'images/queenSpades.png';
            }
            else if (yourHand[4] == 13) {
                document.getElementById('y5').src = 'images/kingSpades.png';
            }
        }
    }
}
function getPastScores() {//this counts the score for each of the past 10 scores
    pastScores.unshift(final);
}
function getAverage() {//this calculates the average score for the last 10 hands
    if (numHands == 1) {
        average = pastScores[0];
    }
    else if (numHands == 2) {
        average = (pastScores[0] + pastScores[1]) / numHands;
    }
    else if (numHands == 3) {
        average = (pastScores[0] + pastScores[1] + pastScores[2]) / numHands;
    }
    else if (numHands == 4) {
        average = (pastScores[0] + pastScores[1] + pastScores[2] + pastScores[3]) / numHands;
    }
    else if (numHands == 5) {
        average = (pastScores[0] + pastScores[1] + pastScores[2] + pastScores[3] + pastScores[4]) / numHands;
    }
    else if (numHands == 6) {
        average = (pastScores[0] + pastScores[1] + pastScores[2] + pastScores[3] + pastScores[4] + pastScores[5]) / numHands;
    }
    else if (numHands == 7) {
        average = (pastScores[0] + pastScores[1] + pastScores[2] + pastScores[3] + pastScores[4] + pastScores[5] + pastScores[6]) / numHands;
    }
    else if (numHands == 8) {
        average = (pastScores[0] + pastScores[1] + pastScores[2] + pastScores[3] + pastScores[4] + pastScores[5] + pastScores[6] + pastScores[7]) / numHands;
    }
    else if (numHands == 9) {
        average = (pastScores[0] + pastScores[1] + pastScores[2] + pastScores[3] + pastScores[4] + pastScores[5] + pastScores[6] + pastScores[7] + pastScores[8]) / numHands;
    }
    else if (numHands > 9) {
        average = (pastScores[0] + pastScores[1] + pastScores[2] + pastScores[3] + pastScores[4] + pastScores[5] + pastScores[6] + pastScores[7] + pastScores[8] + pastScores[9]) / 10;
    }
    document.getElementById('average').style.display = 'block';
}
function changeYourSuit() {//this assigns the correct suit to each of the cards
    if (click == 1) {
        firstSuit = yourSuit;
    }
    else if (click == 2) {
        secondSuit = yourSuit;
    }
    else if (click == 3) {
        thirdSuit = yourSuit;
    }
    else if (click == 4) {
        fourthSuit = yourSuit;
    }
    else if (click == 5) {
        fifthSuit = yourSuit;
    }
}
function sameCard() {//this is the anti-cheat function. If someone clicks a card twice, this will kick in and give you a message
    changeYourSuit();
    var lineSelector = Math.floor(Math.random() * 10);//chooses a random line from the array
    var imageSelector = Math.floor(Math.random() * 2);//chooses a random image from the array
    if (click == 2) {
        if ((yourHand[0] == yourHand[1]) && (firstSuit == secondSuit)) {//if the values of the first two cards and the suits of the first two cards are the same, then you clicked the same card twice
            //this means you cheated
            document.getElementById('stop').style.display = 'none';//gets rid of everything on the screen
            document.getElementById('goBack').style.display = 'table';//shows the 'go back' button
            document.getElementById('cheatLine').style.display = 'table';//shows the 'you cheated' line
            document.getElementById('cheatLine').innerHTML = cheat[lineSelector];//shows the line that was randomly chosen
            document.getElementById('background').style.background = cheatImage[imageSelector];//shows the image that was randomly chosen
        }
    }
    else if (click == 3) {
        if (((yourHand[1] == yourHand[2]) && (thirdSuit == secondSuit)) || ((yourHand[0] == yourHand[2]) && (thirdSuit == firstSuit))) {//two cards are the same
            document.getElementById('stop').style.display = 'none';//gets rid of everything on the screen
            document.getElementById('goBack').style.display = 'table';//shows the 'go back' button
            document.getElementById('cheatLine').style.display = 'table';//shows the 'you cheated' line
            document.getElementById('cheatLine').innerHTML = cheat[lineSelector];//shows the line that was randomly chosen
            document.getElementById('background').style.background = cheatImage[imageSelector];//shows the image that was randomly chosen
        }
    }
    else if (click == 4) {
        if (((yourHand[0] == yourHand[3]) && (fourthSuit == firstSuit)) || ((yourHand[1] == yourHand[3]) && (fourthSuit == secondSuit)) || ((yourHand[2] == yourHand[3]) && (thirdSuit == fourthSuit))) {//two cards are the same
            document.getElementById('stop').style.display = 'none';//gets rid of everything on the screen
            document.getElementById('goBack').style.display = 'table';//shows the 'go back' button
            document.getElementById('cheatLine').style.display = 'table';//shows the 'you cheated' line
            document.getElementById('cheatLine').innerHTML = cheat[lineSelector];//shows the line that was randomly chosen
            document.getElementById('background').style.background = cheatImage[imageSelector];//shows the image that was randomly chosen
        }
    }
    else if (click == 5) {
        if (((yourHand[0] == yourHand[4]) && (fifthSuit == firstSuit)) || ((yourHand[1] == yourHand[4]) && (fifthSuit == secondSuit)) || ((yourHand[2] == yourHand[4]) && (fifthSuit == thirdSuit)) || ((yourHand[3] == yourHand[4]) && (fourthSuit == fifthSuit))) {//two cards are the same
            document.getElementById('stop').style.display = 'none';//gets rid of everything on the screen
            document.getElementById('goBack').style.display = 'table';//shows the 'go back' button
            document.getElementById('cheatLine').style.display = 'table';//shows the 'you cheated' line
            document.getElementById('cheatLine').innerHTML = cheat[lineSelector];//shows the line that was randomly chosen
            document.getElementById('background').style.background = cheatImage[imageSelector];//shows the image that was randomly chosen
        }
    }
}
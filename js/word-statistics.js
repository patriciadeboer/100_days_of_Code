function countingWords(){
	//step 1 getting inputs
	var textInput = document.getElementById('wordz2'); //built function into browser

	var actualText = textInput.value;
	console.log('step1:'+ actualText);

	//step 2 is doing our work

	//Count all chars including space
	console.log('char count: '+ actualText.length);
	var character_count= actualText.length;

	//count chars no spaces
	var char_count_no_space = 0; // need to define it
	for(i=0;i<actualText.length; i++){
		if(actualText[i]!=" "){
			char_count_no_space++;
		}
	}
	console.log('char count no spaces: ' + char_count_no_space);


	//Count number of words ignoring spaces
	var count_words =[];
	count_words=actualText.split(" ");
	var actual_words=count_words.length;
	console.log('all words in array: ');console.log(count_words);

	for (i=0;i<count_words.length;i++){
		if(count_words[i]===""){
			actual_words--;
		}
	}
	console.log('count of words: ' + actual_words);

	//Count Vowels
	var vowels=('aeiou');

	var all_lower_text = actualText.toLowerCase();

	var num_vowels=0;
	for (i=0;i<all_lower_text.length;i++){
	  for(j=0;j<vowels.length;j++){
	    if(all_lower_text[i]===vowels[j]){
	      num_vowels=num_vowels+1;
	    }
	  }
	}

	console.log('number of vowels:' + num_vowels);

	//Tweetable?? aka less than 140 chars including spaces
	var is_tweetable;

   if (character_count > 140){
   	is_tweetable='No';
   }else {
   	is_tweetable = 'Totally Tweetable';
   }

	//*********** Step 3 ****************
	// Put results back into web page

   	var targetStringSpan = document.getElementById('string');
   	targetStringSpan.innerHTML = actualText;

   	var chars= document.getElementById('char_count');
   	chars.innerHTML =character_count;

   	var charsNoSpace= document.getElementById('chars_no_space');
   	charsNoSpace.innerHTML =char_count_no_space;

   	var wordCount= document.getElementById('word_count');
   	wordCount.innerHTML =actual_words;

   	var countVowels= document.getElementById('count_vowels');
   	countVowels.innerHTML =num_vowels;

   	var tweetable_span = document.getElementById('tweetable');
    tweetable_span.innerHTML = is_tweetable;
}
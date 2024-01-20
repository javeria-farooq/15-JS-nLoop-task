// let arr = ['salman', 'arbaz', 'sohail']
// let arr2 = ['saleem', 'asad']

// for(let i = 0; i < arr.length; i++) {
//     for(let j = 0; j < arr2.length; j++) {
//         document.write(arr[i] + " " + arr2[j] + "<br>")
//     }
// }

// ab yhn mujhe kia krna h mn chahti hun k 1 se lekr 100 tk counting print krwaoun lkn tabular form mn yni k puri
// counting na hi horizontal ho or na hi vertiacal ho blke 1 se 10 tk phr 11 se 20 tk or is trhn 100 tk ho t mn kia krngi:

// for(let i = 1; i <= 100; i=i+10) {
//     for(let j = i; j < i+10; j++) {
//         document.write(j + ' ')
//     }
//     document.write('<br>')
// }
// ab sb se phle mene outer loop mn kaha h k i brbr h 1 k or equals and less than rhe 100 k t condition true krdo or
// jb condition true hti h t wo under chla jta h or jb wo under gya t oose mla inner loop jsmn j h or j brbr h i k
// or abhi i ki value 1 h qk abhi i=i+10 wle increment pe nh gya t islye abhi i ki value 1 h or jb j brbr h i k yni
// 1 k phr mene kaha k j ko less than rkho i+10 k yni 1+10 k iska mtlb ye h k agr i ki value 1 h to j ko 1+10 k less
// than kro agr i ki value 11 h t j ko 11+10 k less than kro agr i ki value 21 h t j ko 21+10 k less than kro islye
// j ko i+10 k less than rkha h. acha ab yhn tk t bt smjh aagai. acha ab jb isne condition check ki t isne dekha k
// j < i+10: 1 less than h 1+10 k t ye under chla gya or isne print krwa dia j ki value ko or j ki value th 1 phr ye
// aaya j++ pe t j ki value hwi 2 phr isne dekha k 2 less than h i+10:11 qk i ki value t abhi bh 1 hi h islye. t jb
// 2 less than h 1+10 k t condition true hwi or phr se ye under chla gya or j ko print krwya phr ye j++ pe aaya or j ki
// value 3 hgai ab 3 bh less than h 1+10 k phr true hwa or j ko print krwa dia jski value th. is trhn increment krte krte
// bt pohnchi 9 pe ab isne check kia k 9 less than h 1+10 k phr condition true hwi isne 9 print krwa dia ab incr hwa
// or 10 hgya ab 10 bh less than h 1+10 k t dbra print krwa dia 10 phr incr hwa or check kia 11 less than h 1+10 ab
// false hgya ab ye bahar aagya phr isne kia kia ise mla i=i+10 iska mtlb h k i ki value last point pe jo chori th
// usmn 10+ krwado or last pt mn i ki value 1 th t hmne 1 mn add krwadia 10 t i ki value hgai 11 ab hmnne check kia k 11
// 100 k less than h t true hwa phr dbara inner loop mn gya or dbara j ki value ko i k equal lelia ab i ki value 11 th
// phr isne condition ko kaha k j ko yni k 11 ko less than rkhna i+10 k yni 11+10 k yni j ko 20 tk rkhna 21 na ho
// ab j ki value h 11 or 11 less than h 21 k t isne 11 print krdia phr incr hwa is trhn incr krte krte j ki value 19
// hgai ab isne phr check kraya 19 less than h 21 k phr print krdia phr incr hwa or j ki value 20 hgai ab phr 20 less
// than h 21 k print krdia phr 21 hgai ab 21 less than nh 21 k false hgya ab bahar aaya or i ki value 11 chor k gya th
// ab dbara ise 10 ka incr mla or i ki value 21 hgai ab isne check kia k 21 less than h 100 k phr inner loop mn gya
// or is trhn kaam krta rh. in short k hm kia krnge jb hm nested loop bnate hn t 2 trhn k loop hte hn ek outer or dsra
// inner outer mn mn wo rkhungi jhn se mujhe start krna h ab jse mujhe 1, 11, 21 wghera se start krna th t mne phle outer
// ko 1 deke 10 10 ka incr ek hi wqt mn dne k lye direct i+10 hi krdia. or phr inner loop mn mene dsre variable ko i k
// hi brbr krdia taake i ki value jhn se chorun j whin se start le ab phr usko incr t dia h lkn phle hi bta dia k 10 k 
// incr se aage na brhe t ye kia krega incr krta rhega krta rhga or jsi j ki value incr krte krte 10 ki limit cross kregi
// wo loop se bahar aajaega or is trhn loop chlega. ye hta h nested loop.
const ArrowMul = (a, b) => {
  console.log(a * b);
};
ArrowMul(3, 3);

function vowels(str) {
  let vowelcount = 0;
  for (const ch of str) {
    if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
      vowelcount++;
    }
  }
  console.log("Vowels:", vowelcount);
}

vowels("Talha");
vowels("Muhammad Talha zahid Mughal");

const Arrowvowels = (str) => {
  let vowelcount = 0;
  for (const ch of str) {
    if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
      vowelcount++;
    }
  }
  console.log("Vowels:", vowelcount);
};

Arrowvowels("Talha");
Arrowvowels("Muhammad Talha zahid Mughal");
Arrowvowels("She betrayed me after 7 years of relationship!");

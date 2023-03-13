// Problem 5: Convert your gems into diamond
// তোমাকে একটা function দেওয়া হবে called “gemsToDiamond()”. এটা ইনপুট হিসেবে তিনটা number ( তোমাদের ৩ বন্ধুর gems এর সংখ্যা ) নিবে।
// ১ম বন্ধুর প্রতি gems এর ক্ষমতা = 21
// ২য় বন্ধুর প্রতি gems এর ক্ষমতা = 32
// ৩য় বন্ধুর প্রতি gems এর ক্ষমতা = 43

// [ gems এর ক্ষমতা বলতে একটা gems কে কয়টা diamond এ convert করা যাবে সেটা বুঝানো হচ্ছে। ]
// এখন তোমার task: সব বন্ধুর gems মিলিয়ে total কতটি diamond পাবে সেটা বের করতে হবে। total diamond এর সংখ্যা যদি 1000 এর দিগুন এর উপর হয়ে যায় সেক্ষেত্রে total diamond থেকে 2000 বাদ দিয়ে যতগুলো diamond অবশিষ্ট থাকবে, ততগুলো তোমরা পাবে।

// Sample Input & Output:-
// Input: 1, 1, 1
// Output: 96
// Input: 20, 200, 50
// Output: 6970
// Input: 100, 5, 1
// Output: 303
// problem-5
function gemsToDiamond(friend1gems, friend2gems, friend3gems) {
    if (typeof (friend1gems, friend2gems, friend3gems) !== 'number' || friend1gems < 0 || friend2gems < 0 || friend3gems < 0) {
        return "Please Provide curret input";
    }
    const friend1Diamond = friend1gems * 21;
    const friend2Diamond = friend2gems * 32;
    const friend3Diamond = friend3gems * 43;
    const totalDiamond = friend1Diamond + friend2Diamond + friend3Diamond;
    if (totalDiamond > 1000 * 2) {
        const otherDiamond = totalDiamond - 2000;
        return otherDiamond;
    }
    else if (totalDiamond < 1000 * 2) {
        return totalDiamond;
    }
}
const gemstoDiamond = gemsToDiamond(1, 1, 1);
console.log(gemstoDiamond);
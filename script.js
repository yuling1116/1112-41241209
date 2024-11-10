// 預先設定好圖片陣列
const images = [
    "https://via.placeholder.com/1200x500?text=圖片1",
    "https://via.placeholder.com/1200x500?text=圖片2",
    "https://via.placeholder.com/1200x500?text=圖片3",
    "https://via.placeholder.com/1200x500?text=圖片4",
    "https://via.placeholder.com/1200x500?text=圖片5"
];

// 隨機選擇一張圖片
const randomIndex = Math.floor(Math.random() * images.length);

// 找到img元素，並設置其src為隨機選擇的圖片
document.getElementById("randomImage").src = images[randomIndex];

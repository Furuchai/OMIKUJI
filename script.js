const btn = document.getElementById('btn');
const result = document.getElementById('result');

// 1. おみくじの結果リスト（配列）を作る
// Pythonの list = ["大吉", "吉", ...] と同じです
const fortunes = ['激レア大吉','大吉', '中吉', '小吉', '吉', '凶', '大凶'];

btn.addEventListener('click', () => {
    // 2. リストの中からランダムに選ぶための「番号（インデックス）」を作る
    // Math.random() は 0〜0.99... の数
    // fortunes.length はリストの個数（今回は5）
    // つまり 0〜4 の整数がランダムに作られます
    const randomNum = Math.floor(Math.random() * fortunes.length);

    // 3. 選ばれた番号の結果を表示する
    // fortunes[0]なら「大吉」、fortunes[4]なら「凶」が出ます
    result.textContent = fortunes[randomNum];

    // (応用) 結果によって色を変える
    if (result.textContent === '激レア大吉') {
        result.style.color = 'purple'; // 激レア大吉なら紫
    } else if (result.textContent === '大吉') {
        result.style.color = 'red'; // 大吉なら赤
    } else if (result.textContent === '凶') {
        result.style.color = '#65BBE9'; // 凶なら水色
    } else if (result.textContent === '大凶') {
        result.style.color = 'blue'; // 大凶なら青
    } else {
        result.style.color = '#333'; // それ以外は黒
    }
});
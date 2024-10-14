document.getElementById ('donation-btn').addEventListener('click',function(){
    document.getElementById('donation-container').classList.remove('hidden');
    document.getElementById('history-container').classList.add('hidden');
})
document.getElementById ('history-btn').addEventListener('click',function(){
    document.getElementById('history-container').classList.remove('hidden');
    document.getElementById('donation-container').classList.add('hidden');
})
function showBgById(id){
    document.getElementById('donation-btn').classList.remove('bg-green-300','border-none');
    document.getElementById('history-btn').classList.remove('bg-green-300','border-none');
    document.getElementById(id).classList.add('bg-green-300','border-none');
};

function InputValueById(id){
    return parseInt(document.getElementById(id).value);
}
function InputTextById(id){
    return parseInt(document.getElementById(id).innerText);
}
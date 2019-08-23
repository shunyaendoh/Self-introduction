const searchNameText = document.querySelector('#search-name-input');
const nameList = document.querySelectorAll('#name-list button');


//マウスホバーで文字色,テキストを変える

$(() => {

        $('#name-list button').on('mouseover', function() {
            $(this).css('color', 'gray');
            const Nick = $(this).data('nick');
            $(this).text(Nick);
        });
        $('#name-list button').on('mouseout', function() {
            $(this).css('color', 'black');
            const Rename = $(this).data('names');
            $(this).text(Rename);

        })
       
})

$(() => {
         $('.reverse').on('mouseover', () => {
            $('.reverse').css('color','black');
    
        });
    
         $('.reverse').on('mouseout', () => {
            $('.reverse').css('color','#663399');
        });
})


//検索関数

$(() => {
    $('#search-name-input').on('keyup', () => {
        const searchInput = searchNameText.value;

        nameList.forEach((element) => {
            if (!searchInput || searchInput === '') {
                element.classList.remove('hide');
                return;
            }

            const Name = element.dataset.name,
                  Phonetic = element.dataset.phonetic,
                  Sex = element.dataset.sex,
                  Status = element.dataset.status;
                  
            if (
                searchInput === Name.substr(0,searchInput.length) ||
                searchInput === Phonetic.substr(0,searchInput.length) ||
                searchInput === Sex.substr(0,searchInput.length) ||
                searchInput === Status.substr(0,searchInput.length) 

            ) {
                element.classList.remove('hide');
            } else {
                element.classList.add('hide');
            }
        });
    });

})

let int = 0;

$('.reverse').on('click', () => {
    $('#name-list').css('margin-top','40px');

    $('#name-list').css('grid-template-columns','repeat(3,1fr) repeat(2,2fr)');

    $('#name-list button:first-child').css('grid-row','5 / 6');
    $('#name-list button:nth-child(2)').css('grid-row','3 / 4');
    $('#name-list button:nth-child(3)').css('grid-row','3 / 4');
    $('#name-list button:nth-child(4)').css('grid-row','2 / 3');
    $('#name-list button:nth-child(5)').css('grid-row','2 / 3');
    $('#name-list button:nth-child(6)').css('grid-row','1 / 2');
    $('#name-list button:nth-child(7)').css('grid-row','4 / 5');
    $('#name-list button:nth-child(8)').css('grid-row','2 / 3');
    $('#name-list button:nth-child(9)').css('grid-row','4 / 5');
    $('#name-list button:nth-child(10)').css('grid-row','1 / 2');
    $('#name-list button:nth-child(11)').css('grid-row','1 / 2');
    $('#name-list button:nth-child(12)').css('grid-row','3 / 4');
    $('#name-list button:nth-child(13)').css('grid-row','4 / 5');
    $('#name-list button:nth-child(14)').css('grid-row','4 / 5');
    $('#name-list button:nth-child(15)').css('grid-row','1 / 2');
    $('#name-list button:nth-child(16)').css('grid-row','3 / 4');
    $('#name-list button:nth-child(17)').css('grid-row','4 / 5');
    $('#name-list button:nth-child(18)').css('grid-row','2 / 3');
    $('#name-list button:nth-child(19)').css('grid-row','3 / 4');
    $('#name-list button:nth-child(20)').css('grid-row','2 / 3');
    $('#name-list button:nth-child(21)').css('grid-row','1 / 2');

    $('#name-list button:first-child').css('grid-column','3 / 4');
    $('#name-list button:nth-child(2)').css('grid-column','5 / 6');
    $('#name-list button:nth-child(3)').css('grid-column','2 / 3');
    $('#name-list button:nth-child(4)').css('grid-column','5 / 6');
    $('#name-list button:nth-child(5)').css('grid-column','4 / 5');
    $('#name-list button:nth-child(6)').css('grid-column','1 / 2');
    $('#name-list button:nth-child(7)').css('grid-column','2 / 3');
    $('#name-list button:nth-child(8)').css('grid-column','2 / 3');
    $('#name-list button:nth-child(9)').css('grid-column','3 / 4');
    $('#name-list button:nth-child(10)').css('grid-column','5 / 6');
    $('#name-list button:nth-child(11)').css('grid-column','2 / 3');
    $('#name-list button:nth-child(12)').css('grid-column','4 / 5');
    $('#name-list button:nth-child(13)').css('grid-column','1 / 2');
    $('#name-list button:nth-child(14)').css('grid-column','5 / 6');
    $('#name-list button:nth-child(15)').css('grid-column','3 / 4');
    $('#name-list button:nth-child(16)').css('grid-column','3 / 4');
    $('#name-list button:nth-child(17)').css('grid-column','4 / 5');
    $('#name-list button:nth-child(18)').css('grid-column','3 / 4');
    $('#name-list button:nth-child(19)').css('grid-column','1 / 2');
    $('#name-list button:nth-child(20)').css('grid-column','1 / 2');
    $('#name-list button:nth-child(21)').css('grid-column','4 / 5');

    $('#name-list button:first-child').css('left','180px');
    $('#name-list button:nth-child(5)').css('left','60px');
    $('#name-list button:nth-child(12)').css('left','60px');
    $('#name-list button:nth-child(17)').css('left','60px');
    $('#name-list button:nth-child(21)').css('left','60px');
    $('#name-list button:nth-child(2)').css('left','-20px');
    $('#name-list button:nth-child(4)').css('left','-20px');
    $('#name-list button:nth-child(10)').css('left','-20px');
    $('#name-list button:nth-child(14)').css('left','-20px');

    $('.reverse').css('left','-26px');
    $('.reverse').css('top','-117px');

    //２回目はページ更新
    
    if (int >= 1) {
        location.reload();
    }
        int++;
        console.log(int);
})

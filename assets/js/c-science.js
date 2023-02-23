
let
    copyValueBtn = document.querySelectorAll('.copy-value'),
    // term1
    term1 = document.querySelector('#term1-box').children[1],
    // term2
    term2 = document.querySelector('#term2-box').children[1],
    // term 3
    term3 = document.querySelector('#term3-box').children[1],
    // term 4
    term4 = document.querySelector('#term4-box').children[1],
    // term 5
    term5 = document.querySelector('#term5-box').children[1],
    // term6
    term6 = document.querySelector('#term6-box').children[1],
    // term 7
    term7 = document.querySelector('#term7-box').children[1],
    // term 8
    term8 = document.querySelector('#term8-box').children[1],
    // all term box
    allLessonsWrappers = document.querySelectorAll('.lessons-wrapper'),
    // term headers
    termHeaders = document.querySelectorAll('.term-header'),
    convertedValue = '';
// events + a function

// event
document.addEventListener("DOMContentLoaded", init())
function init() {

    // term 1
    termCreate(term1, "مبانی کامپیوتر و برنامه سازی")
    termCreate(term1, "فیزیک 1")
    termCreate(term1, "ریاضی عمومی 1")
    termCreate(term1, "زبان انگلیسی")
    termCreate(term1, "فارسی پیش دانشگاهی")
    termCreate(term1, "فیزیک پیش دانشگاهی")
    termCreate(term1, "ریاضی پیش دانشگاهی")

    // term 2
    termCreate(term2, "برنامه سازی پیشرفته")
    termCreate(term2, "ریاضیات گسسته")
    termCreate(term2, "کارگاه کامپیوتر")
    termCreate(term2, "فیزیک 2")
    termCreate(term2, "ریاضی عمومی 2")
    termCreate(term2, "اندیشه اسلامی 1")
    termCreate(term2, "زبان فارسی")
    termCreate(term2, "آشنایی با قرآن کریم")
    termCreate(term2, "تربیت بدنی")

    // term 3
    termCreate(term3, "ساختمان های داده")
    termCreate(term3, "مداری منطقی")
    termCreate(term3, "زبان تخصصی")
    termCreate(term3, "معادلات دیفرانسیل")
    termCreate(term3, "آمار و احتمال مهندسی")
    termCreate(term3, "آزمایشگاه فیزیک 2")
    termCreate(term3, "ورزش 1")
    termCreate(term3, "اندیشه اسلامی 2")

    // term 4
    termCreate(term4, "طراحی الگوریتم")
    termCreate(term4, "معماری کامپیوتر")
    termCreate(term4, "مدار الکتریکی")
    termCreate(term4, "هوش مصنوعی و سیستم های خبره")
    termCreate(term4, "ریاضیات مهندسی")
    termCreate(term4, "روش پژوهش و اراعه")
    termCreate(term4, "تحلیل و طراحی سیستم ها")

    // term 5
    termCreate(term5, "سیستم های عامل")
    termCreate(term5, "نظریه زبان ها و ماشین ها")
    termCreate(term5, "ریز پردازنده های و ماشین ها")
    termCreate(term5, "آزمایشگاه مداری منطقی و معماری کامپیوتر")
    termCreate(term5, "پایگاه داده ها")
    termCreate(term5, "مهندسی نرم افزار")
    termCreate(term5, "انقلاب اسلامی ایران")
    termCreate(term5, "تاریخ تحلیل صدر اسلام")

    // term 6
    termCreate(term6, "سیگنال ها و سیستم ها")
    termCreate(term6, "شبکه های کامپیوتری")
    termCreate(term6, "اصول طراحی کامپایلر")
    termCreate(term6, "طراحی کامپیوتری سیستم های دیجیتال")
    termCreate(term6, "آزمایشگاه ریز پردازنده های")
    termCreate(term6, "آزمایشگاه سیستم های عامل")
    termCreate(term6, "سیستم های توزیع شده")
    termCreate(term6, "آیین زندگی")

    // term 7
    termCreate(term7, "آزمایشگاه شبکه های کامپیوتری")
    termCreate(term7, "طراحی زبان های برنامه سازی")
    termCreate(term7, "سیستم های اطلاعات مدیریت")
    termCreate(term7, "مبانی داده کاوی")
    termCreate(term7, "کار آموزی")
    termCreate(term7, "آزمایشگاه پایگاه داده")
    termCreate(term7, "مبانی رایانش امن")
    termCreate(term7, "تفسیر موضوعی قرآن")

    // term 8
    termCreate(term8, "مبانی بازیابی اطاعات و جستجوی وب")
    termCreate(term8, "پیاده سازی سیستم پایگاه داده")
    termCreate(term8, "مهندسی اینترنت")
    termCreate(term8, "آزمایشگاه مهندسی نرم افزار")
    termCreate(term8, "پروژه نرم افزار")
    termCreate(term8, "تاریخ فرهنگ و تمدن اسلام و ایران")
    termCreate(term8, "وصایای امام")
    termCreate(term8, "دانش خانواده و جمعیت")

    // loads
    copyValueBtn = document.querySelectorAll('.copy-value')
    allTermBoxes = document.querySelectorAll('.each-lesson-box')
    termHeaders = document.querySelectorAll('.term-header')
    allLessonsWrappers.forEach(box => {
        box.classList.add("hide")
    })


}

termHeaders.forEach(header => {
    header.addEventListener("click", () => {
        header.nextElementSibling.classList.toggle("hide")
        header.children[0].classList.toggle("rotateUp")
    })

})
// TITLE: term create
// creates term by calling lessonsTemplate

function termCreate(term, value) {
    // term 1 
    term.innerHTML += lessonsTemplate(value)
}


copyValueBtn.forEach(copyEl => {
    copyEl.addEventListener("click", convertFormat)

    // TITLE: convert format
    // replaces "ک" and "ی" and "spaces" with "%"
    // adds "%" to end and beginning of user input
    // puts the new value into convertedValue variable
    // copies the value to clipboard
    // gives the element copied class and removes it after 2 seconds
    function convertFormat() {
        convertedValue = copyEl.previousElementSibling.textContent.replace(/(\s|ک|ی)/gi, "%")
        convertedValue = "%" + convertedValue + "%"
        navigator.clipboard.writeText(convertedValue)
        copyEl.classList.add("copied")
        setTimeout(function () {
            copyEl.classList.remove("copied")
        }, 2000)
    }
})
// functions

// TITLE: lessons template
function lessonsTemplate(lessonName) {
    return `
    <p class="each-lesson-box">
        <span class="ms-3">${lessonName}</span>
        <span class="copy-value">کپی</span>
    </p>
`
}


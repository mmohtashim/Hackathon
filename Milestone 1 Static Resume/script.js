"use strict";
//.................Ref_Section.................
let ref_section = document.getElementById('ref');
let ref_btn = document.getElementById('ref_btn');
ref_btn?.addEventListener('click', () => {
    ref_section.classList.toggle('hide');
});
//.................Exp_Section.................
let exp_section = document.getElementById('exp');
let exp_btn = document.getElementById('exp_btn');
exp_btn?.addEventListener('click', () => {
    exp_section.classList.toggle('hide');
});
// //.................Lang_Section.................
let lang_section = document.getElementById('lang');
let lang_btn = document.getElementById('lang_btn');
lang_btn?.addEventListener('click', () => {
    lang_section.classList.toggle('hide');
});
// //.................Expertise_Section.................
let expertise_section = document.getElementById('expertise');
let expertise_btn = document.getElementById('expertise_btn');
expertise_btn?.addEventListener('click', () => {
    expertise_section.classList.toggle('hide');
});
// //.................Edu_Section.................
let edu_section = document.getElementById('edu');
let edu_btn = document.getElementById('edu_btn');
edu_btn?.addEventListener('click', () => {
    edu_section.classList.toggle('hide');
});
// //.................Con_Section.................
let con_section = document.getElementById('con');
let con_btn = document.getElementById('con_btn');
con_btn?.addEventListener('click', () => {
    con_section.classList.toggle('hide');
});
print_btn?.addEventListener('click', () => {
    window.print();
});

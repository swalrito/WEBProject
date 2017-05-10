function init () {
	var button_1=document.getElementById('btn_a');
	var button_2=document.getElementById('btn_b');
	var button_3=document.getElementById('btn_c');
	var button_4=document.getElementById('btn_d');

	var gallery=document.getElementsByClassName("gallery");

	button_1.onclick=function ()
	{
		button_1.style.backgroundColor = '#ffffff';
		button_2.style.backgroundColor = '#ffffff';
		button_3.style.backgroundColor = '#ffffff';
		button_4.style.backgroundColor = '#ffffff';
		gallery[0].style.left  = '0px';
		button_1.style.backgroundColor = '#ff0000';
	}
	button_2.onclick=function ()
	{
		button_1.style.backgroundColor = '#ffffff';
		button_2.style.backgroundColor = '#ffffff';
		button_3.style.backgroundColor = '#ffffff';
		button_4.style.backgroundColor = '#ffffff';
		gallery[0].style.left  = '-1920px';
		button_2.style.backgroundColor = '#ff0000';
	}
	button_3.onclick=function ()
	{
		button_1.style.backgroundColor = '#ffffff';
		button_2.style.backgroundColor = '#ffffff';
		button_3.style.backgroundColor = '#ffffff';
		button_4.style.backgroundColor = '#ffffff';
		gallery[0].style.left  = '-3840px';
		button_3.style.backgroundColor = '#ff0000';
	}
	button_4.onclick=function ()
	{
		button_1.style.backgroundColor = '#ffffff';
		button_2.style.backgroundColor = '#ffffff';
		button_3.style.backgroundColor = '#ffffff';
		button_4.style.backgroundColor = '#ffffff';
		gallery[0].style.left  = '-5760px';
		button_4.style.backgroundColor = '#ff0000';
	}
}

init();
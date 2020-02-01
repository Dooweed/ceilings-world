var ImageSmall1 = document.getElementById("zoomGate_1"),
	ImageSmall2 = document.getElementById("zoomGate_2"),
	ImageSmall3 = document.getElementById("zoomGate_3"),
	ImageSmall4 = document.getElementById("zoomGate_4"),
	ImageSmall5 = document.getElementById("zoomGate_5"),
	ImageBig1 = document.getElementById("zoomed_div_1"),
	ImageBig2 = document.getElementById("zoomed_div_2"),
	ImageBig3 = document.getElementById("zoomed_div_3"),
	ImageBig4 = document.getElementById("zoomed_div_4"),
	ImageBig5 = document.getElementById("zoomed_div_5");

ImageSmall1.addEventListener("click", zoomIn1);
ImageSmall2.addEventListener("click", zoomIn2);
ImageSmall3.addEventListener("click", zoomIn3);
ImageSmall4.addEventListener("click", zoomIn4);
ImageSmall5.addEventListener("click", zoomIn5);

ImageBig1.addEventListener("click", zoomOut1);
ImageBig2.addEventListener("click", zoomOut2);
ImageBig3.addEventListener("click", zoomOut3);
ImageBig4.addEventListener("click", zoomOut4);
ImageBig5.addEventListener("click", zoomOut5);


function zoomOut1(){
	ImageBig1.style.display = "none";
};
function zoomOut2(){
	ImageBig2.style.display = "none";
};
function zoomOut3(){
	ImageBig3.style.display = "none";
};
function zoomOut4(){
	ImageBig4.style.display = "none";
};
function zoomOut5(){
	ImageBig5.style.display = "none";
};

function zoomIn1(){
	ImageBig1.style.display = "block";
};
function zoomIn2(){
	ImageBig2.style.display = "block";
};
function zoomIn3(){
	ImageBig3.style.display = "block";
};
function zoomIn4(){
	ImageBig4.style.display = "block";
};
function zoomIn5(){
	ImageBig5.style.display = "block";
};






var buttonApply = document.getElementById("apply_button"),
	formApply = document.getElementById("apply_form"),
	exitApply = document.getElementById("exit_apply_form"),
	buttonApply1 = document.getElementById("apply_button_1"),
	buttonApply2 = document.getElementById("apply_button_2"),
	buttonApply3 = document.getElementById("apply_button_3"),
	buttonApply4 = document.getElementById("apply_button_4"),
	buttonApply5 = document.getElementById("apply_button_5"),
	buttonApply6 = document.getElementById("apply_button_6"),
	callButton = document.getElementById("call_button");


callButton.addEventListener("click", openForm);
buttonApply1.addEventListener("click", openForm);
buttonApply2.addEventListener("click", openForm);
buttonApply3.addEventListener("click", openForm);
buttonApply4.addEventListener("click", openForm);
buttonApply5.addEventListener("click", openForm);
buttonApply6.addEventListener("click", openForm);
buttonApply.addEventListener("click", openForm);
/*formApply.addEventListener("click", exitForm);*/
exitApply.addEventListener("click", exitForm);
function openForm(){
	formApply.style.display = "flex";
};
function exitForm(){
	formApply.style.display = "none";
};





















var menuColumnar = document.getElementById("menuColumnar"),
	buttonMenuShow = document.getElementById("buttonMenuShow"),
	buttonMenuHide = document.getElementById("buttonMenuHide");

buttonMenuShow.addEventListener("click", showMenu);
buttonMenuHide.addEventListener("click", hideMenu);

function showMenu(){
	menuColumnar.style.display = "block";
	buttonMenuHide.style.display = "block";
	buttonMenuShow.style.display = "none";
};
function hideMenu(){
	menuColumnar.style.display = "none";
	buttonMenuHide.style.display = "none";
	buttonMenuShow.style.display = "block";
};





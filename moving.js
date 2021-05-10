function main(){
    const step = 14;
    let block = document.getElementById("block");
    block.style.top = "0px";
    block.style.left = "0px";

    document.addEventListener("keydown", e => {
        let prevTop = Number.parseFloat(block.style.top);
        let prevLeft = Number.parseFloat(block.style.left);
        switch (e.key) {
            case "ArrowUp":
                if(prevTop > 0) block.style.top = `${prevTop - step}px`;
                break;
        
            case "ArrowDown":
                if(prevTop < (document.body.clientHeight - block.clientHeight)) block.style.top = `${prevTop + step}px`;
                break;

            case "ArrowLeft":
                if(prevLeft > 0) block.style.left = `${prevLeft - step}px`;
                break;

            case "ArrowRight":
                if(prevLeft < (document.body.clientWidth - block.clientWidth)) block.style.left = `${prevLeft + step}px`;
                break;
        }
    });
}
main();
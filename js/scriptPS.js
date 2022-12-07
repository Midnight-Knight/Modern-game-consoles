function DualSensWhite(a)
{
    let src1 = "../picture/PS/dualsense-";
    let src2 = ".webp";
    document.getElementById("DualSensPict").src = src1 + a + src2;
    if (a != 1)
    {
        document.getElementById("DualSensPict").style.width = "25vmax"; 
    }
    else
    {
        document.getElementById("DualSensPict").style.width = "23vmax";
    }
}

function Pulse3D(a)
{
    let src1 = "../picture/PS/3d-pulse-";
    let src2 = ".webp";
    document.getElementById("Pulse3DPict").src = src1 + a + src2;
}

function PS5Panel(a)
{
    let src1 = "../picture/PS/ps-5-";
    let src2 = ".png";
    document.getElementById("PS5PanelPict").src = src1 + a + src2;
}
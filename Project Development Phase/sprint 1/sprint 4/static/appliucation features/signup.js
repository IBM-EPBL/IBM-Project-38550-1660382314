*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
}
body {
    user-select: none;
    user-zoom: none;
    scroll-behavior: smooth;
    background-image: linear-gradient(135deg, #bdc2e8 10%, #e6dee9 100%);
    }
    .login-block {
    margin: 8px auto;
    min-height: 80.6vh
    }
    .login-block .auth-box {
    margin: 20px auto 0;
    max-width: 450px !important
    }
    .head{
        font-weight: 800;
    font-size: 20px;
    line-height: 20px;
    font-family: 'Inter', sans-serif;
    background: -webkit-linear-gradient(20deg, hsl(280, 91%, 61%), rgb(255, 64, 1));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    }
    .card {
    border-radius: 5px;
    -webkit-box-shadow: 0 0 5px 0 rgba(43, 43, 43, .1), 0 11px 6px -7px rgba(43, 43, 43, .1);
    box-shadow: 0 0 5px 0 rgba(43, 43, 43, .1), 0 11px 6px -7px rgba(43, 43, 43, .1);
    border: none;
    margin-bottom: 10px;
    -webkit-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
    background-color: #fff
    }
    .card .card-block {
    padding: 1rem;
    }
    .f-80 {
    font-size: 80px
    }
    .form-group {
    margin-bottom: 1em;
    }
    .form-material .form-control {
    display: inline-block;
    height: 43px;
    width: 90%;
    border: none;
    border-radius: 0;
    font-size: 16px;
    font-weight: 400;
    padding: 9px;
    background-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none;
    border-bottom: 1px solid #ccc
    }
    .btn-md {
    padding: 10px 16px;
    font-size: 15px;
    line-height: 23px
    }
    .btn-primary {
    background-color: #4099ff;
    border-color: #4099ff;
    color: #fff;
    cursor: pointer;
    -webkit-transition: all ease-in .3s;
    transition: all ease-in .3s
    }
    .btn {
    border-radius: 2px;
    text-transform: capitalize;
    font-size: 15px;
    padding: 10px 19px;
    cursor: pointer
    }
    .m-b-20 {
    margin-bottom: 20px
    }
    .btn-md {
    padding: 10px 16px;
    font-size: 15px;
    line-height: 23px
    }
    .heading {
    font-size: 21px
    }
    #infoMessage p {
    color: red !important
    }
    .btn-google {
    color: #545454;
    background-color: #ffffff;
    box-shadow: 0 1px 2px 1px #ddd;
    }
     .btn-g{
        width: 25px;
     }
    .or-container {
    align-items: center;
    color: #ccc;
    display: flex;
    margin: 25px 0
    }
    .line-separator {
    background-color: #ccc;
    flex-grow: 5;
    height: 1px
    }
    .or-label {
    flex-grow: 1;
    margin: 0 15px;
    text-align: center
    }
  

    /*! ================================! for scroll bar=======================  */
    ::-webkit-scrollbar {
        appearance: none;
    
    }
    
    ::-webkit-scrollbar-track {
        appearance: none;
    }
    
    ::-webkit-scrollbar-thumb {
        appearance: none;
    }

    /* To remove up down arrow bottons in number input field */
    input::-webkit-inner-spin-button,
    input::-webkit-outer-spin-button{
    -webkit-appearance: none;
    margin: 0px;
    }
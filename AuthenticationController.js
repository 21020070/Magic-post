class AuthenticationController {
    constructor(loginCheck, checkAuthentication) {
      this.loginCheck = loginCheck;
      this.checkAuthentication = checkAuthentication;
    }
  
    // Hiển thị trang đăng nhập
    showLogin(req, res, next) {
      this.loginCheck.show(req, res, next);
    }
  
    // Xử lý đăng nhập
    postLogin(req, res) {
      this.loginCheck.post_login(req, res);
    }
  
    // Các phương thức kiểm tra quyền
    checkManager(req, res, next) {
      this.checkAuthentication.checkManager(req, res, next);
    }
  
    checkTransactionStaff(req, res, next) {
      this.checkAuthentication.checkTransactionStaff(req, res, next);
    }
  
    // ...các phương thức kiểm tra quyền khác
  }
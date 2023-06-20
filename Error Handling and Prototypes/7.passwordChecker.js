class User{
    username;
    #password;
  
    constructor(username,password){
        this.username=username;
        this.#password=password;
    }
    getPassword(){
        return "*".repeat(this.#password.length);
    }
    setPassword(newPassword){
      if(newPassword.length>=8&&/[0-9]/.test(newPassword)&&/[A-Z]/.test(newPassword)){
        this.#password=newPassword;
      }else{
        console.log("Error:Password must be at least 8 characters long and contain at least one number and one uppercase letter");
      }
        
    }
    display(){
        p=this.#password;
        console.log(p);
    }

}
const user=new User("Mithun","Password123");
console.log(user.getPassword());
user.setPassword("myPassword");
user.setPassword("MyPassword");
user.setPassword("Mypassword123213333");
console.log(user.getPassword());



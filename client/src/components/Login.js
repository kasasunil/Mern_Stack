import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

const Login=()=>{
  return (
    <>
        <section class="vh-100 mt-5">
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          class="img-fluid" alt="Sample image" />
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p class="lead fw-normal mb-0 me-3">Sign in with</p>
            <button type="button" class="btn btn-primary btn-floating mx-1">
            <i class="zmdi zmdi-facebook zmdi-hc-fw"/>
            </button>

            <button type="button" class="btn btn-primary btn-floating mx-1">
            <i class="zmdi zmdi-twitter zmdi-hc-fw"/>
            </button>

            <button type="button" class="btn btn-primary btn-floating mx-1">
            <i class="zmdi zmdi-linkedin zmdi-hc-fw"/>
            </button>
          </div>

          <div class="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0">Or</p>
          </div>

          <form class="mx-1 mx-md-4" action="">
          <div class="form-outline mb-4">
            <input type="email" id="form3Example3" class="form-control form-control-lg"
              placeholder="Enter a valid email address" name="email"/>
            <label class="form-label" for="form3Example3" name="email">Email address</label>
          </div>

          <div class="form-outline mb-3">
            <input type="password" id="form3Example4" class="form-control form-control-lg"
              placeholder="Enter password" name="password"/>
            <label class="form-label" for="form3Example4" name="password">Password</label>
          </div>

          <div class="d-flex justify-content-between align-items-center">
            <div class="form-check mb-0">
              <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label class="form-check-label" for="form2Example3">
                Remember me
              </label>
            </div>
            <a href="#!" class="text-body">Forgot password?</a>
          </div>

          <div class="text-center text-lg-start mt-4 pt-2">
            <button class="btn btn-primary btn-lg">Login</button>
            <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="/signup"
                class="link-danger">Register</a></p>
          </div>
          </form>
        
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Login
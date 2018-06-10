<template>
        <div class="container">
            <div class="row">
                <div class="col-md-4 offset-4">
                    <form>
                    <div class="form-group">
                        <label for="email">Email </label>
                        <input type="email" id="email" placeholder="Email" class="form-control" autofocus required>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" placeholder="Password" class="form-control" required>
                    </div>
                    <button class="btn btn-primary"> Log in</button>
                    </form>
                </div>
             </div>
        </div>
</template>

<script>
export default {
  name: "login"
};
</script>


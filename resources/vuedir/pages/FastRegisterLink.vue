<template>
        <div class="content">

            <div class="page-header">
                <div class="page-title">
                    <h3>{{title}}</h3>
                </div>
            </div>
<!--
            <div class="row">
                <div class="col-md-12">
                    <div class="card border-0 m-b-10">
                        <div>
                            <div id="ecommerce-system-account" class="btn btn-outline-light  dash-my-btn-0 active p-l-r-25">
                                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.0" stroke-linecap="round" stroke-linejoin="round" class="feather feather-tool nav-link-icon m-r-10">
                                    <path fill-rule="evenodd" d="M11 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM1.022 13h9.956a.274.274 0 00.014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 00.022.004zm9.974.056v-.002.002zM6 7a2 2 0 100-4 2 2 0 000 4zm3-2a3 3 0 11-6 0 3 3 0 016 0zm4.5 0a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 010-1H13V5.5a.5.5 0 01.5-.5z"></path>
                                    <path fill-rule="evenodd" d="M13 7.5a.5.5 0 01.5-.5h2a.5.5 0 010 1H14v1.5a.5.5 0 01-1 0v-2z"></path>
                                </svg>
                                <span>Account</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>-->

            <div class="row">
                <div class="col-md-12">

                    <div class="card">
                        <div class="card-body">
                            <div class="tab-content" id="system-user-profile-tabContent">
                                <div class="tab-pane fade show active" id="system-user-profile-general" role="tabpanel" aria-labelledby="system-user-profile-general-tab">
                                    <div class="card border-0">
                                        <div class="card-body">
                                            <form id="fast-reg-frm" name="fast-reg-frm" method="post">

                                                <div class="row">
                                                    <div class="col-md-2">
                                                        <div class="form-group p-l-50">
                                                            <label for="fast-reg-email-input" style="margin-top: 0.3rem;color:#666">Email</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-10">
                                                        <div class="form-group  p-r-120">
                                                            <input type="email" class="form-control-0" id="fast-reg-email-input" aria-describedby="emailHelp">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-2">
                                                        <div class="form-group  p-l-50">
                                                            <label style="margin-top: 0.3rem;color:#666">User Name</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-10">
                                                        <div class="form-group  p-r-120">
                                                            <input type="text" id="fast-reg-username-input" class="form-control-0" value="">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-2">
                                                        <div class="form-group  p-l-50">
                                                            <label style="margin-top: 0.3rem;color:#666">Name</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-10">
                                                        <div class="form-group  p-r-120">
                                                            <input type="text" id="fast-reg-name-input" class="form-control-0" value="">
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-md-2">
                                                        <div class="form-group  p-l-50">
                                                            <label for="fast-reg-password-input" style="margin-top: 0.3rem;color:#666">Password</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-10">
                                                        <div class="form-group  p-r-120">
                                                            <input type="password" class="form-control-0" id="fast-reg-password-input" aria-describedby="emailHelp">
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-md-2">
                                                        <div class="form-group  p-l-50">
                                                            <label for="fast-reg-remark-textarea" style="margin-top: 0.3rem;color:#666">Remark</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-10">
                                                        <div class="form-group p-r-120">
                                                          <!--  <input type="text" class="form-control-0" id="fast-reg-remark-textarea" aria-describedby="emailHelp">-->
                                                            <textarea id="fast-reg-remark-textarea"></textarea>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="row m-t-20">
                                                    <div class="col-md-2">

                                                    </div>
                                                    <div class="col-md-10">
                                                        <button class="btn btn-primary">
                                                            <i class="ti-check mr-2"></i> Add
                                                        </button>
                                                    </div>
                                                </div>

                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
</template>
<style>
    textarea[id=fast-reg-remark-textarea] {
        resize: none;
        border-radius: 0.8rem;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        overflow: visible;
        transition: all 0.2s;
        display: block;
        width: 100%;
        padding: 10px;
    }
</style>
<script>
    export default {
        computed: {
            // 계산된 getter
            title: function () {
                return this.$store.state.curMenu
            }
        }
    }
</script>

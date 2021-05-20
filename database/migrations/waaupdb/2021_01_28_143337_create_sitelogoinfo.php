<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSitelogoinfo extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::connection('waaupdb')->hasTable('sitelogoinfo')==false) {
            Schema::connection('waaupdb')->create('sitelogoinfo', function (Blueprint $table) {
                $table->id();
                $table->string('site_logtype')->nullable();
                $table->string('site_logname', 1024)->nullable();
                $table->string('site_logsize')->nullable();
                $table->string('site_logstyle')->nullable();
                $table->string('server')->nullable();
                $table->timestamp('created_at')->useCurrent();
                $table->timestamp('updated_at')->useCurrent();
                $table->string('g_path', 50)->default('remote');
            });
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sitelogoinfo');
    }
}

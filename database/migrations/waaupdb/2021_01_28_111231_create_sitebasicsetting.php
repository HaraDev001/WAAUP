<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSitebasicsetting extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::connection('waaupdb')->hasTable('sitebasicsetting')==false) {
            Schema::connection('waaupdb')->create('sitebasicsetting', function (Blueprint $table) {
                $table->id();
                $table->string('domain')->nullable();
                $table->string('dashboard')->nullable();
                $table->string('slogan')->nullable();
                $table->text('login')->nullable();
                $table->text('register')->nullable();
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
        Schema::dropIfExists('sitebasicsetting');
    }
}

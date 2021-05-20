<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProfile extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::connection('waaupdb')->hasTable('profile')==false) {
            Schema::connection('waaupdb')->create('profile', function (Blueprint $table) {
                $table->id();
                $table->integer('uid')->default(11);
                $table->text('Text')->nullable();
                $table->text('Number')->nullable();
                $table->text('Email')->nullable();
                $table->text('Date')->nullable();
                $table->timestamp('created_at')->useCurrent();
                $table->timestamp('updated_at')->useCurrent();
                $table->text('Default')->nullable();
                $table->text('Senior')->nullable();
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
        Schema::dropIfExists('profile');
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWesfrontLang extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::connection('waaupdb')->hasTable('wesfront_lang')==false) {
            Schema::connection('waaupdb')->create('wesfront_lang', function (Blueprint $table) {
                $table->id();
                $table->string('str_type')->index()->nullable();
                $table->string('str_key', 1024)->index()->nullable();
                $table->text('str_cont')->nullable();
                $table->string('str_link')->nullable();
                $table->string('iso')->index()->nullable();
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
        Schema::dropIfExists('wesfront_lang');
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTbModulelanguage extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::connection('waaupapps')->hasTable('tb_modulelanguage')==false) {
            Schema::connection('waaupapps')->create('tb_modulelanguage', function (Blueprint $table) {
                $table->id();
                $table->string('iso', 50)->nullable();
                $table->string('dialcode', 50)->nullable();
                $table->string('name', 100)->nullable();
                $table->string('status', 50)->nullable();
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
        Schema::dropIfExists('tb_modulelanguage');
    }
}

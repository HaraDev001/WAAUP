<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSitefieldtext extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::connection('waaupdb')->hasTable('sitefieldtext')==false) {
            Schema::connection('waaupdb')->create('sitefieldtext', function (Blueprint $table) {
                $table->id();
                $table->text('name')->nullable();
                $table->integer('minvalue')->default(0);
                $table->integer('maxvalue')->default(0);
                $table->integer('style_alpha')->default(0);
                $table->integer('style_num')->default(0);
                $table->integer('style_upper_lower')->default(0);
                $table->integer('style_special')->default(0);
                $table->text('style_title')->nullable();
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
        Schema::dropIfExists('sitefieldtext');
    }
}

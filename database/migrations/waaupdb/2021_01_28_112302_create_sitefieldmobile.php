<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSitefieldmobile extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::connection('waaupdb')->hasTable('sitefieldmobile')==false) {
            Schema::connection('waaupdb')->create('sitefieldmobile', function (Blueprint $table) {
                $table->id();
                $table->string('name')->nullable();
                $table->string('countryname')->nullable();
                $table->string('countryiso')->nullable();
                $table->string('characters')->nullable();
                $table->integer('dialcode')->nullable();
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
        Schema::dropIfExists('sitefieldmobile');
    }
}

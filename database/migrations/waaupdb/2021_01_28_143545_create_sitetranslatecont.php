<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSitetranslatecont extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::connection('waaupdb')->hasTable('sitetranslatecont')==false) {
            Schema::connection('waaupdb')->create('sitetranslatecont', function (Blueprint $table) {
                $table->id();
                $table->string('str_type')->index('str_type')->nullable();
                $table->string('str_key', 1024)->index('str_key')->nullable();
                $table->text('str_cont')->nullable();
                $table->string('str_link')->nullable();
                $table->string('iso', 10)->index('iso')->default('en');
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
        Schema::dropIfExists('sitetranslatecont');
    }
}

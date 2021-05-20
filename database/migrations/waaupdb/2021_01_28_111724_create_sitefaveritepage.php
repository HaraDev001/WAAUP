<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSitefaveritepage extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::connection('waaupdb')->hasTable('sitefaveritepage')==false) {
            Schema::connection('waaupdb')->create('sitefaveritepage', function (Blueprint $table) {
                $table->id();
                $table->integer('userinfo_id')->default(1);
                $table->string('linkid')->nullable();
                $table->string('pagename')->nullable();
                $table->string('pagemenu')->nullable();
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
        Schema::dropIfExists('sitefaveritepage');
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('security_events', function (Blueprint $table) {
        $table->id();
        $table->string('event_type');      // e.g., 'failed_login', 'port_scan'
        $table->string('source_ip');       // Originating IP address
        $table->text('payload')->nullable(); // Extra telemetry details
        $table->string('severity')->default('LOW'); // LOW, MEDIUM, HIGH, CRITICAL
        $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('security_events');
    }
};

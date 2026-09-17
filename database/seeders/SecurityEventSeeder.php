<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\SecurityEvent;

class SecurityEventSeeder extends Seeder
{
    public function run(): void
    {
        // Clear out old data to avoid duplicates
        SecurityEvent::truncate();

        // Insert simulated threat telemetry
        SecurityEvent::create([
            'event_type' => 'failed_login_burst',
            'source_ip' => '192.168.1.45',
            'payload' => 'Multiple repeated login attempts detected on root account.',
            'severity' => 'HIGH',
        ]);

        SecurityEvent::create([
            'event_type' => 'port_scanning',
            'source_ip' => '45.33.32.156',
            'payload' => 'TCP SYN scan detected across ports 20-1024.',
            'severity' => 'CRITICAL',
        ]);

        SecurityEvent::create([
            'event_type' => 'unusual_request_frequency',
            'source_ip' => '10.0.0.12',
            'payload' => 'High volume of HTTP GET requests to restricted endpoint.',
            'severity' => 'MEDIUM',
        ]);
        
        SecurityEvent::create([
            'event_type' => 'unauthorized_access',
            'source_ip' => '192.168.1.89',
            'payload' => 'Single failed login attempt.',
            'severity' => 'LOW',
        ]);
    }
}
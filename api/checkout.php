<?php

require_once '../vendor/autoload.php';
require_once '../src/secrets.php';

// Enable CORS for development
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit();
}

\Stripe\Stripe::setApiKey($stripeSecretKey);
header('Content-Type: application/json');

try {
    // Get POST data
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);
    
    if (!$data) {
        throw new Exception('Invalid request data');
    }

    // Validate required fields
    if (!isset($data['jobId']) || !isset($data['totalCost'])) {
        throw new Exception('Missing required fields');
    }

    // Get protocol and host for domain
    $protocol = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? 'https://' : 'http://';
    $host = $_SERVER['HTTP_HOST'];
    $YOUR_DOMAIN = 'http://localhost:3000'; // Hardcode for development

    $checkout_session = \Stripe\Checkout\Session::create([
        'payment_method_types' => ['card'],
        'line_items' => [[
            'price_data' => [
                'currency' => 'usd',
                'product_data' => [
                    'name' => 'Job Listing',
                    'description' => 'Job ID: ' . $data['jobId'],
                ],
                'unit_amount' => intval($data['totalCost'] * 100), // Convert dollars to cents
            ],
            'quantity' => 1,
        ]],
        'mode' => 'payment',
        'success_url' => $YOUR_DOMAIN . '/Checkout?success=true&session_id={CHECKOUT_SESSION_ID}',
        'cancel_url' => $YOUR_DOMAIN . '/Checkout?canceled=true',
        'metadata' => [
            'jobId' => $data['jobId']
        ],
    ]);

    echo json_encode(['id' => $checkout_session->id, 'url' => $checkout_session->url]);

} catch(Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}
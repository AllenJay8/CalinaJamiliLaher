<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    public function store(Request $request)
    {
        return response()->json([
            'message' => 'Transaction endpoint is working.',
            'data' => $request->all()
        ], 200);
    }
}

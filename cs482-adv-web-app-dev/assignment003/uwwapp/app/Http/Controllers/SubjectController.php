<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Subject;

class SubjectController extends Controller
{
    public function subjects(Request $request)
    {
        // Get all subjects
        $subjects = Subject::select('subject', 'full_name')->orderby('subject')->get();

        // Return all subjects
        return view('subjects', ['subjects' => $subjects]);
    }
}

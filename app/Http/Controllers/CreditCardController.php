<?php

namespace App\Http\Controllers;

use App\Models\CreditCard;
use Carbon\Carbon;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class CreditCardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): Response
    {
        return Inertia::render("CreditCards/Index", [
            "cards" => $request->user()->cards()->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $data = $request->all();
        // Calcular lastDigits a partir de number
        $lastDigits = substr($data['number'], -4);
        // Convertir la fecha de caducidad a un objeto Carbon
        $expirationDate = Carbon::createFromFormat('m/y', $data['expirationDate'])->endOfMonth();
        // Agregar lastDigits al arreglo de datos
        $data['lastDigits'] = $lastDigits;
        $data['expirationDate'] = $expirationDate;
        $request->user()->cards()->create($data);
        return redirect(route('cards.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(CreditCard $creditCard)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(CreditCard $creditCard)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, CreditCard $creditCard)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CreditCard $creditCard): RedirectResponse
    {
        $creditCard->delete();
        return redirect(route('cards.index'));
    }
}

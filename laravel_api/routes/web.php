<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});
$router->group(['prefix' => 'api'], function () use ($router) {
    resource('clientes', 'ClienteController', $router);
    resource('empresas', 'EmpresaController', $router);
    resource('funcionarios', 'FuncionarioController', $router);
});


/**
 * Cria automaticamente as rotas para o CRUD
 *
 * @param string  $uri
 * @param string  $controller
 * @param Router  $router
 * @return void
 */
function resource($uri, $controller, $router)
{
    $router->get($uri, $controller . '@index');
    $router->post($uri . '/novo', $controller . '@store');
    $router->get($uri . '/{id}', $controller . '@edit');
    $router->put($uri . '/update/{id}', $controller . '@update');
    $router->delete($uri . '/{id}', $controller . '@destroy');
}

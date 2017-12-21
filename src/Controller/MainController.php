<?php
namespace App\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Routing\Annotation\Route;

class MainController extends Controller
{

    /**
     * @Route("/", name="homepage")
     */
    public function mainPage()
    {

        return $this->render('homepage.html.twig');
    }
}
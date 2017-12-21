<?php
namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;


class TestController extends Controller
{

    /**
     * @Route("/test/number")
     */
    public function number()
    {
        $number = mt_rand(0, 100);

        return $this->render('test/number.html.twig', [
            'number'=>$number
        ]);
    }
}
<?php
namespace App\Controller;


use App\Entity\User;
use App\Form\UserType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class AuthController extends Controller
{

    protected $phpToJsDateFormat = [
        'm/d/Y' => 'mm/dd/yyyy'
    ];

    /**
     * @Route("/login", name="user_login")
     * @param Request $request
     * @param AuthenticationUtils $authUtils
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function login(Request $request, AuthenticationUtils $authUtils)
    {
        $error = $authUtils->getLastAuthenticationError();
        $lastUsername = $authUtils->getLastUsername();


        return $this->render('auth/login.html.twig', [
            'last_username'=>$lastUsername,
            'error'=>$error,
        ]);
    }

    /**
     * @Route("/registration", name="user_registration")
     * @param Request $request
     * @param UserPasswordEncoderInterface $passwordEncoder
     * @return \Symfony\Component\HttpFoundation\RedirectResponse|\Symfony\Component\HttpFoundation\Response
     */
    public function register(Request $request, UserPasswordEncoderInterface $passwordEncoder)
    {
        $user = new User();
        $form = $this->createForm(UserType::class, $user);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()){
            $user->setUsername($form->get('username'));
            $password = $passwordEncoder->encodePassword(
                $user, $user->getPlainPassword()
            );
            $user->setPassword($password);
            $user->setEmail($form->get('email'));
            $user->setFirstName($form->get('firstName'));
            $user->setSecondName($form->get('secondName'));
            $user->setCountry($form->get('country'));
            $user->setPhone($form->get('phone'));
            $em = $this->getDoctrine()->getManager();
            $em->persist($user);
            $em->flush();

            return $this->redirectToRoute('homepage');
        }

        return $this->render('auth/registration.html.twig', ['form'=> $form->createView(), 'date_format'=>$this->phpToJsDateFormat[User::DATE_FORMAT]]);
    }
}
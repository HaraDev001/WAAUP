<?php /** @noinspection ALL */

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use AlibabaCloud\Client\AlibabaCloud;
use AlibabaCloud\Client\Exception\ClientException;
use AlibabaCloud\Client\Exception\ServerException;
//use Illuminate\Support\Facades\Mail;
use Swift_Mailer;
use Swift_Message;
use Swift_SmtpTransport;

/* sms aliyun */
use Aliyun\Core\Config;
use Aliyun\Core\Profile\DefaultProfile;
use Aliyun\Core\DefaultAcsClient;
use Aliyun\Api\Sms\Request\V20170525\SendSmsRequest;
use Aliyun\Api\Sms\Request\V20170525\SendBatchSmsRequest;
use Aliyun\Api\Sms\Request\V20170525\QuerySendDetailsRequest;

Config::load();


class CommonController extends Controller
{
    public function compareCKcode()
    {
        $postdata = $_POST;
        $phone = $postdata['phone'];
        $ckcode = $postdata['ckcode'];
        $verify=session()->get('verifiCode');
        // $code = Crypt::decryptString($code);

        if($verify==$ckcode)
        {
            return \Response::json([
                'status'  =>  "ok",
                'phone' => $phone
            ]);
        }
        else
        {
            return \Response::json([
                'status'  =>  "err"
            ]);
        }

        exit();
    }

    public function generateRamdomCode()
    {
        $rand_num = sprintf('%06d',rand(000000,999999));
        return $rand_num;
    }

    public function  sendMailByAjax()
    {
        $postdata = $_POST;
        $to = $postdata['toUser'];
        $rand_num = $this->generateRamdomCode();

        // Create the Transport
        $transport = (new Swift_SmtpTransport('smtp.exmail.qq.com', 465))
            ->setUsername('info@waaup.org')
            ->setPassword('SAYKn8gm825HyWw9')//B42i2W46YAZw353m
            ->setEncryption('ssl')
        ;

// Create the Mailer using your created Transport
        $mailer = new Swift_Mailer($transport);

// Create a message
        $message = (new Swift_Message('验证码'))
            ->setFrom(['info@waaup.org' => 'from wes'])
            ->setTo([$to])
            ->setBody('验证码为 : '.$rand_num)
        ;

// Send the message
        $result = $mailer->send($message);

        if($result < 1)
        {
            return \Response::json([
                'status'  =>  "err"
            ]);
        }
        else
        {
            session()->put('verifiCode', $rand_num);
            return \Response::json([
                'status'  =>  "ok",
                'ckcode' => $rand_num,
                'code' =>$result
            ]);
        }

        exit();
    }

    public function  sendMailByAdmin($email, $condi, $cont)
    {
        $to = $email;
        // Create the Transport
        $transport = (new Swift_SmtpTransport('smtp.exmail.qq.com', 465))
            ->setUsername('info@waaup.org')
            ->setPassword('SAYKn8gm825HyWw9')
            ->setEncryption('ssl');

// Create the Mailer using your created Transport
        $mailer = new Swift_Mailer($transport);

// Create a message
        if($condi > 0)
        {

            $message = (new Swift_Message('your register has been approved'))
                ->setFrom(['info@waaup.org' => 'from wes'])
                ->setTo([$to])
                ->setBody($cont, 'text/html');

            //->addPart('My amazing body in plain text', 'text/plain');
        }
        else
        {
            $message = (new Swift_Message('your register has been canceled'))
                ->setFrom(['info@waaup.org' => 'from wes'])
                ->setTo([$to])
                ->setBody($cont, 'text/html');
        }

// Send the message
        $result = $mailer->send($message);

        if($result < 1)
        {
            return false;
        }
        else
        {
            return true;
        }

        return false;
    }

    public function sendSMSByAjax()
    {
        $postdata = $_POST;
        $to = $postdata['toUser'];
        $rand_num = $this->generateRamdomCode();
        //ckd remove{{
        /*
                session()->put('verifiCode', $rand_num);
             session()->put('verifiCode', $rand_num);
               return \Response::json([
                   'status'  =>  "ok",
                   'ckcode' =>$rand_num
               ]);
               exit();
        */
        //}}

        AlibabaCloud::accessKeyClient('LTAI4G4oj1o7KsQpWPqg976N', 'VuoWpGaOpo8SBzwke8UiEexqnvM07K')
            ->regionId('cn-hangzhou')
            ->asDefaultClient();
        try {
            $result = AlibabaCloud::rpc()
                ->product('Dysmsapi')
                // ->scheme('https') // https | http
                ->version('2017-05-25')
                ->action('SendSms')
                ->method('POST')
                ->host('dysmsapi.aliyuncs.com')
                ->options([
                    'query' => [
                        'RegionId' => "cn-hangzhou",
                        'PhoneNumbers' => $to,
                        'SignName' => "伟普教育系统",
                        'TemplateCode' => "SMS_190451140",
                        'TemplateParam' => "{\"code\":\"".$rand_num."\"}",
                    ],
                ])
                ->request();

            $bool=false;
            $rt = $result->toArray();
            if($rt['Message']=="OK" || $rt['Message']=="ok")
                $bool = true;
            else
                $bool = false;

            if($bool){
                session()->put('verifiCode', $rand_num);
                return \Response::json([
                    'status'  =>  "ok",
                    'code' =>$result->toArray(),
                    'ckcode'=>$rand_num
                ]);
            }
            else{
                return \Response::json([
                    'status'  =>  'err'
                ]);
            }

        } catch (ClientException $e) {
            //echo $e->getErrorMessage() . PHP_EOL;
            return \Response::json([
                'status'  =>  $e->getErrorMessage()
            ]);

        } catch (ServerException $e) {
            //echo $e->getErrorMessage() . PHP_EOL;

            return \Response::json([
                'status'  =>  $e->getErrorMessage()
            ]);
        }

        exit();
    }

    public function sendSMSByAdmin($phonenumber, $condi, $cont)
    {
        $to = $phonenumber;

        AlibabaCloud::accessKeyClient('LTAI4G4oj1o7KsQpWPqg976N', 'VuoWpGaOpo8SBzwke8UiEexqnvM07K')
            ->regionId('cn-hangzhou')
            ->asDefaultClient();

        try {
            if($condi > 0)
            {
                $cont="approved";

                $result = AlibabaCloud::rpc()
                    ->product('Dysmsapi')
                    // ->scheme('https') // https | http
                    ->version('2017-05-25')
                    ->action('SendSms')
                    ->method('POST')
                    ->host('dysmsapi.aliyuncs.com')
                    ->options([
                        'query' => [
                            'RegionId' => "cn-hangzhou",
                            'PhoneNumbers' => $to,
                            'SignName' => "伟普教育系统",
                            'TemplateCode' => "SMS_190451140",
                            'TemplateParam' => "{\"code\":\"".$cont."\"}",
                        ],
                    ])
                    ->request();
            }
            else
            {
                //$cont="没有得到批准。";
                $cont="canceled";

                $result = AlibabaCloud::rpc()
                    ->product('Dysmsapi')
                    // ->scheme('https') // https | http
                    ->version('2017-05-25')
                    ->action('SendSms')
                    ->method('POST')
                    ->host('dysmsapi.aliyuncs.com')
                    ->options([
                        'query' => [
                            'RegionId' => "cn-hangzhou",
                            'PhoneNumbers' => $to,
                            'SignName' => "伟普教育系统",
                            'TemplateCode' => "SMS_190451140",
                            //'TemplateParam' => "{\"code\":\"没有得到批准。看你的邮件。\"}",
                            'TemplateParam' => "{\"code\":\"".$cont."\"}",
                        ],
                    ])
                    ->request();
            }

            $rt = $result->toArray();
            if($rt['Message']=="OK" || $rt['Message']=="ok")
                return true;
            else
                return false;

        } catch (ClientException $e) {
            //echo $e->getErrorMessage() . PHP_EOL;
            return false;

        } catch (ServerException $e) {
            //echo $e->getErrorMessage() . PHP_EOL;

            return false;
        }

        return false;
    }

    public function imagesUploadPost(Request $request)
    {
        $validator = \Validator::make($request->all(), [
            'uploadFile' => 'max:2048|mimes:jpeg,png,jpg',
        ]);
        if ($validator->fails()) {
            return \Response::json([
                'type'  =>  'error',
                'message' =>  'File must be smaller than 2mb and in jpg or png format.'
            ]);
            exit();
        }
        $file = $request->file('uploadFile');
        $destinationPath = 'uploads/images/';
        $filename = time() . '-' . $file->getClientOriginalName();
        $file->move(public_path() . '/' . $destinationPath, $filename);
        $image = $destinationPath . $filename;
        return \Response::json([
            'type' => 'success',
            'imgname'  =>  $filename,
            'url'   =>  asset($image)
        ]);
    }

    public  function tempimgDelete(Request $request)
    {
        // $postdata = $_POST;
        $upimgname = $request->post("upimgname");

        if($upimgname == null || $upimgname == "")
            $upimgname = $request->header("upimgname");

        $destinationPath = 'uploads/images/';
        $path = public_path() . '/' . $destinationPath . $upimgname;
        $bool = false;
        if(file_exists($path))
            $bool = @unlink($path);

        if ($bool)
        {
            return \Response::json([
                'type' => 'success'
            ]);
        }
        else
        {
            return \Response::json([
                'type' => 'error'
            ]);
        }
    }

    public function docUploadPost(Request $request)
    {

        $validator = \Validator::make($request->all(), [
            'suploadFile' => 'max:4096|mimes:jpeg,png,jpg,doc,docx,xlsx,xls,txt,pdf',
        ]);
        if ($validator->fails()) {
            return \Response::json([
                'type'  =>  'error',
                'message' =>  'File must be smaller than 4mb and in jpg or png or docx... format.'
            ]);

            exit();
        }
        $file = $request->file('uploadqualctrl');
        $destinationPath = 'uploads/pdoc/';
        $orgname = $file->getClientOriginalName();
        $filename = time() . '-' . $orgname;
        $file->move(public_path() . '/' . $destinationPath, $filename);
        //$image = $destinationPath . $filename;

        return \Response::json([
            'docname'  =>  $filename,
            'orgname' => $orgname
        ]);
    }

    public  function tempDocDelete(Request $request)
    {
        //$postdata = $_POST;
        $updocname = $request->post("updocname");

        if($updocname == null || $updocname == "")
            $updocname = $request->header("updocname");

        $destinationPath = 'uploads/pdoc/';
        $path = public_path() . '/' . $destinationPath . $updocname;
        $bool = false;
        if(file_exists($path))
            $bool = @unlink($path);

        /* $fys = new Filesystem;
         $fys->delete($path);*/

        if ($bool)
        {
            return \Response::json([
                'type' => 'success'
            ]);
        }
        else
        {
            return \Response::json([
                'type' => 'error'
            ]);
        }
    }

    /*
        public function imagesUploadPostMuti(Request $request)
        {
            request()->validate([
                'uploadFile' => 'required',
            ]);
            foreach ($request->file('uploadFile') as $key => $value) {
                $imageName = time(). $key . '.' . $value->getClientOriginalExtension();
                $value->move(public_path('images'), $imageName);
            }
            return response()->json(['success'=>'Images Uploaded Successfully.']);
        }
    */
    public function gettempqrcode(Request $request)
    {
        $sceneId = $request->sceneId;
        return response()->json(['msg'=>'success','sceneId'=>$sceneId]);
    }


    /* 대쉬보드에서 초청 메일보내기 */
    public function sendMailByInvoke(Request $request){
        $elist = $request->emails;
        $elist = urldecode($elist);
        $elist = rtrim($elist,"#");

        $mailcont = $request->mailcont;
        $mailcont = urldecode($mailcont);

        if($mailcont=="")
            $cont="请加入我们的WES帐户。 在这里每个都可以沟通，协作任务和项目，管理客户并做更多的事情。";
        else
            $cont=$mailcont;
        // Create the Transport
        $transport = (new Swift_SmtpTransport('smtp.exmail.qq.com', 465))
            ->setUsername('info@waaup.org')
            ->setPassword('SAYKn8gm825HyWw9')
            ->setEncryption('ssl');
// Create the Mailer using your created Transport
        $mailer = new Swift_Mailer($transport);

        $e_list = explode("#", $elist);

        if(is_array($e_list))
        {
            $cnt=0;
            for($i=0; $i<count($e_list); $i++){
               $to=$e_list[$i];

                $message = (new Swift_Message('消息文本'))
                    ->setFrom(['info@waaup.org' => 'from wes'])
                    ->setTo([$to])
                    ->setBody($cont, 'text/html');
                $result = $mailer->send($message);
                if($result > 0)
                    $cnt++;

                /* wait for 1 seconds */
                sleep(1);
                /* wait for 2 seconds
                usleep(2000000);
                */
            }

            if($cnt < 1)
                return response()->json(['status'=>'err','cnt'=>$cnt]);
            else
                return response()->json(['status'=>'ok','cnt'=>$cnt]);
        }
        else
         {
             $to=$elist;
            $message = (new Swift_Message('消息文本'))
                ->setFrom(['info@waaup.org' => 'from wes'])
                ->setTo([$to])
                ->setBody($cont, 'text/html');
            $result = $mailer->send($message);

            if($result < 1)
               return response()->json(['status'=>'err','cnt'=>0]);
            else
               return response()->json(['status'=>'ok','cnt'=>1]);
        }

       exit();
    }

    static $acsClient = null;

    public static  function getAcsClient() {
        //产品名称:云通信短信服务API产品,开发者无需替换
        $product = "Dysmsapi";

        //产品域名,开发者无需替换
        $domain = "dysmsapi.aliyuncs.com";

        // TODO 此处需要替换成开发者自己的AK (https://ak-console.aliyun.com/)
        $accessKeyId = "LTAI4G4oj1o7KsQpWPqg976N"; // AccessKeyId

        $accessKeySecret = "VuoWpGaOpo8SBzwke8UiEexqnvM07K"; // AccessKeySecret

        // 暂时不支持多Region
        $region = "cn-hangzhou";

        // 服务结点
        $endPointName = "cn-hangzhou";


        if(static::$acsClient == null) {

            //初始化acsClient,暂不支持region化
            $profile = DefaultProfile::getProfile($region, $accessKeyId, $accessKeySecret);

            // 增加服务结点
            DefaultProfile::addEndpoint($endPointName, $region, $product, $domain);

            // 初始化AcsClient用于发起请求
            static::$acsClient = new DefaultAcsClient($profile);
        }
        return static::$acsClient;
    }

    /* 대쉬보드에서 초청 SMS보내기  후에 수정할것 */
    public static function sendSMSByInvokeNexmo(Request $request)
    {
        $to = $request->phone;
        $sms_key = env('NEXMO_KEY');
        $sms_secret = env('NEXMO_SECRET');

        $basic  = new \Nexmo\Client\Credentials\Basic($sms_key, $sms_secret);
        $client = new \Nexmo\Client($basic);

        try {
            $message = $client->message()->send([
                'to' => '8613843259201',
                'from' => 'Vonage APIs',
                'text' => '안녕 여기를보라구:http://18.166.103.166'
            ]);
            $response = $message->getResponseData();

            if($response['messages'][0]['status'] == 0) {
               // echo "The message was sent successfully\n";
                return \Response::json([
                    'status'  =>  "ok"
                ]);
            } else {
                //echo "The message failed with status: " . $response['messages'][0]['status'] . "\n";
                return \Response::json([
                    'status'  =>  $response['messages'][0]['status']
                ]);
            }
        } catch (Exception $e) {
           // echo "The message was not sent. Error: " . $e->getMessage() . "\n";
            return \Response::json([
                'status'  =>  $e->getMessage()
            ]);
        }


        exit();

    }

    public static function sendSMSByInvoke_sendsms(Request $request)
    {
        $to = $request->phone;
        $fastreg=$request->fastreg;

        $rand_num = sprintf('%06d',rand(000000,999999));

       $request = new SendSmsRequest();

        $request->setPhoneNumbers($to);


       $request->setSignName("伟普教育");//伟普教育系统
        $request->setTemplateCode("SMS_198667060");

        $request->setTemplateParam(json_encode(array(
            "fastreg"=>$fastreg,
            //"sms text string"=>"dsd"
        ), JSON_UNESCAPED_UNICODE));
        //$request->setOutId("chkd");
       // $request->setSmsUpExtendCode("1234567");
        $acsResponse =  static::getAcsClient()->getAcsResponse($request);
        $bool=false;
        $rt = $acsResponse;
        if($rt->Message=="OK" || $rt->Message=="ok")
            $bool = true;
        else
            $bool = false;

        if($bool)
        {
            $rand_num = $rand_num + 1971;
            $int_as_string = (string) $rand_num;
            $int_as_string = "3127".$int_as_string."7921";

            return response()->json(['status'=>'ok','ckcode'=>$int_as_string]);
        }
        else
        {
            return response()->json(['status'=>$rt->Message]);
        }


        exit();

    }

    public function sendSMSByInvoke(Request $request)
    {
        $to = $request->phone;
        $fastreg=$request->fastreg;

        AlibabaCloud::accessKeyClient('LTAI4G4oj1o7KsQpWPqg976N', 'VuoWpGaOpo8SBzwke8UiEexqnvM07K')
            ->regionId('cn-hangzhou')
            ->asDefaultClient();

        try {
            $result = AlibabaCloud::rpc()
                ->product('Dysmsapi')
                // ->scheme('https') // https | http
                ->version('2017-05-25')
                ->action('SendSms')
                ->method('POST')
                ->host('dysmsapi.aliyuncs.com')
                ->options([
                    'query' => [
                        'RegionId' => "cn-hangzhou",
                        'PhoneNumbers' => $to,
                        'SignName' => "伟普教育",
                        'TemplateCode' => "SMS_200710881",               //"SMS_199201943"
                        'TemplateParam' => "{\"fastreg\":\"".$fastreg."\"}",
                    ],
                ])
                ->request();
              /*  ->options([
                    'query' => [
                        'RegionId' => "cn-hangzhou",
                        'PhoneNumbers' => $to,
                        'SignName' => "伟普教育系统",
                        'TemplateCode' => "SMS_190451140",
                        'TemplateParam' => "{\"code\":\"".$rand_num."\"}",
                    ],
                ])
                ->request();*/

            $bool=false;
            $rt = $result->toArray();
            if($rt['Message']=="OK" || $rt['Message']=="ok")
                $bool = true;
            else
                $bool = false;

            if($bool)
            {
                return response()->json(['status'=>'ok']);
            }
            else
            {
                return response()->json(['status'=>$rt['Message']]);
            }

        }
        catch (ClientException $e)
        {
            return response()->json(['status'=>$e->getErrorMessage()]);

        } catch (ServerException $e) {
            //echo $e->getErrorMessage() . PHP_EOL;
            return response()->json(['status'=>$e->getErrorMessage()]);
        }

        exit();

    }

    /*
     call from waaup
       */
    public function sendSMSByOtherSite(Request $request)
    {
        $to = $request->post('phone');
        $rand_num = $this->generateRamdomCode();
        // return response()->json(['status'=>'ok','ckcode'=>$rand_num]);

        AlibabaCloud::accessKeyClient('LTAI4G4oj1o7KsQpWPqg976N', 'VuoWpGaOpo8SBzwke8UiEexqnvM07K')
            ->regionId('cn-hangzhou')
            ->asDefaultClient();
        try {
            $result = AlibabaCloud::rpc()
                ->product('Dysmsapi')
                // ->scheme('https') // https | http
                ->version('2017-05-25')
                ->action('SendSms')
                ->method('POST')
                ->host('dysmsapi.aliyuncs.com')
                ->options([
                    'query' => [
                        'RegionId' => "cn-hangzhou",
                        'PhoneNumbers' => $to,
                        'SignName' => "WAAUP",
                        'TemplateCode' => "SMS_199260035",
                        'TemplateParam' => "{\"code\":\"".$rand_num."\"}",
                    ],
                ])
                ->request();

            $bool=false;
            $rt = $result->toArray();
            if($rt['Message']=="OK" || $rt['Message']=="ok")
                $bool = true;
            else
                $bool = false;

            if($bool)
			{
				$rand_num = $rand_num + 1971;
				$int_as_string = (string) $rand_num;
                $int_as_string = "3127".$int_as_string."7921";

				return response()->json(['status'=>'ok','ckcode'=>$int_as_string]);
			}
			else
			{
				return response()->json(['status'=>$rt['Message']]);
			}

        }
        catch (ClientException $e)
        {
            return response()->json(['status'=>$e->getErrorMessage()]);

        } catch (ServerException $e) {
            //echo $e->getErrorMessage() . PHP_EOL;
            return response()->json(['status'=>$e->getErrorMessage()]);
        }

        exit();

    }

    function get_client_ip()
    {
        $ipaddress = '';
        if (isset($_SERVER['HTTP_CLIENT_IP'])) {
            $ipaddress = $_SERVER['HTTP_CLIENT_IP'];
        } else if (isset($_SERVER['HTTP_X_FORWARDED_FOR'])) {
            $ipaddress = $_SERVER['HTTP_X_FORWARDED_FOR'];
        } else if (isset($_SERVER['HTTP_X_FORWARDED'])) {
            $ipaddress = $_SERVER['HTTP_X_FORWARDED'];
        } else if (isset($_SERVER['HTTP_FORWARDED_FOR'])) {
            $ipaddress = $_SERVER['HTTP_FORWARDED_FOR'];
        } else if (isset($_SERVER['HTTP_FORWARDED'])) {
            $ipaddress = $_SERVER['HTTP_FORWARDED'];
        } else if (isset($_SERVER['REMOTE_ADDR'])) {
            $ipaddress = $_SERVER['REMOTE_ADDR'];
        } else {
            $ipaddress = 'UNKNOWN';
        }

        return $ipaddress;
    }

    public function  getBrowerLocale(Request $request){
        if (session()->has('locale')) {
            $locale = session()->get('locale', Config::get('app.locale'));
        } else {
            $locale = substr($request->server('HTTP_ACCEPT_LANGUAGE'), 0, 2);
            session()->put('locale', $locale);
            /*  if ($locale != 'fr' && $locale != 'en') {
                  $locale = 'en';
              }*/
        }
        return $locale;
    }

/* Miscrosoft Translator */
    function com_create_guid() {
        return sprintf( '%04x%04x-%04x-%04x-%04x-%04x%04x%04x',
            mt_rand( 0, 0xffff ), mt_rand( 0, 0xffff ),
            mt_rand( 0, 0xffff ),
            mt_rand( 0, 0x0fff ) | 0x4000,
            mt_rand( 0, 0x3fff ) | 0x8000,
            mt_rand( 0, 0xffff ), mt_rand( 0, 0xffff ), mt_rand( 0, 0xffff )
        );
    }

    function Translate ($to, $content)
    {
        $key = "be8e6b458925493baaeeebf784f47eb3";
        $host = "https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&from=en&to=".$to;
        $content = json_encode($content);
        $headers = "Content-type: application/json\r\n" .
            "Content-length: " . strlen($content) . "\r\n" .
            "Ocp-Apim-Subscription-Key: " . $key . "\r\n" .
            "Ocp-Apim-Subscription-Region: westus2\r\n" .
            "X-ClientTraceId: " . $this->com_create_guid() . "\r\n";
        $options = array (
            'http' => array (
                'header' => $headers,
                'method' => 'POST',
                'content' => $content,
                'ignore_errors' => false
            )
        );
        $context  = stream_context_create ($options);
        try{
            $result = file_get_contents ($host, false, $context);
            $json = json_encode(json_decode($result), JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
        }
        catch (ClientException $e)
        {
           // return response()->json(['status'=>$e->getErrorMessage()]);
            return '';
        }
        catch (ServerException $e) {
            //return response()->json(['status'=>$e->getErrorMessage()]);
            return '';
        }
        return $json;
    }

}
